import { isAuthenticated } from "../middlewares/auth.js";
import { sendToken } from "../lib/sendToken.js";
import User from "../models/user-model.js";
import { hashOtp, otpGen, sendSMS } from "../lib/otp.js";
import bcrypt from "bcrypt";

export const sendOtp = async (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    res.status(400).json({ message: "phone is missing" });
  }
  const otp = otpGen();

  //hash
  const ttl = 1000 * 60 * 60 * 24; // 1 day
  const expires = Date.now() + ttl;
  const data = `${phone}.${otp}.${expires}`;
  const hash = hashOtp(data);

  try {
    await sendSMS(phone, otp);
    res.status(200).json({
      hash: `${hash}.${expires}`,
      phone,
      otp,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json("msg:message sending failed");
  }
};

export const verifyOtp = async (req, res) => {
  const { otp, hash, phone } = req.body;

  if (!otp || !hash || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const [hashedOtp, expires] = hash.split(".");

  if (Date.now() > parseInt(expires)) {
    return res.status(400).json({ message: "OTP expired" });
  }

  const data = `${phone}.${otp}.${expires}`;

  const isValid = hashedOtp === hashOtp(data);
  if (!isValid) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  return res.status(200).json({
    message: "User verified successfully",
  });
};

export const signUp = async (req, res) => {
  const { step, firstName, lastName, email, password } = req.body;

  try {
    if (step === 1) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(401).json({ message: "Email already exists" });
      }

      const user = new User({ email, password });
      await user.save();

      const token = sendToken(res, user);

      return res.status(200).json({
        message: "User created successfully",
        user,
        token,
      });
    }

    if (step === 2) {
      const authResult = await isAuthenticated(req, res);
      if (!authResult) {
        return res.status(400).json({ message: "Unauthorized" });
      }

      // The userId is now available in req.user (set by isAuthenticated)

      const { _id: userId } = req.user;
      // console.log("Authenticated user ID:", userId);

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const name = firstName + " " + lastName;

      const updatedUser = await User.findByIdAndUpdate(
        userId,

        { firstName, lastName, name },
        { new: true } // Return the updated user
      );

      return res.status(200).json({
        message: "User updated successfully",
        user: updatedUser,
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Email does not exist" });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    sendToken(res, user);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const onboarding = async (req, res) => {
  try {
    const { location, recentJob, startYear, endYear, step, collegeName } =
      req.body;
    if (step === 1) {
      const { _id: userId } = req.user;

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { location, recentJob, isStudent: false },
        { new: true }
      );

      await updatedUser.save();

      return res.status(200).json({
        success: true,
        user: updatedUser,
        message: "Onboarding page",
      });
    }
    if (step === 2) {
      const { _id: userId } = req.user;
      if (endYear < startYear) {
        return res
          .status(400)
          .json({ message: "End year should be greater than start year" });
      }

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { location, collegeName, startYear, endYear, isStudent: true },
        { new: true }
      );

      await updatedUser.save();

      return res.status(200).json({
        success: true,
        user: updatedUser,

        message: "Onboarding page",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
