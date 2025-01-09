import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

export const sendToken = (res, user) => {
  const tokenSecret = process.env.JWT_SECRET;

  if (!tokenSecret) {
    throw new Error("Token secret not found");
  }

  const token = jwt.sign({ _id: user._id }, tokenSecret, { expiresIn: "24d" });

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });
  res.cookie("user", JSON.stringify(user), {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });
  return token;
};
