import { io } from "../index.js";
import { Connection } from "../models/connection-model.js";
import User from "../models/user-model.js";

export const getMyProfile = async (req, res) => {
  try {
    const { _id: userId } = req.user;

    const user = await User.findById(userId);
    const shortId = userId.slice(0, 8);
    console.log(user);

    const linkedId =
      user.firstName.toLowerCase() +
      "-" +
      user.lastName.toLowerCase() +
      "-" +
      shortId;
    const name = user.firstName + " " + user.lastName;

    const transformedUser = {
      _id: user._id,

      linkedId,
      email: user.email,
      phone: user.phone,
      firstName: user.firstName,
      lastName: user.lastName,
      name,
      location: user.location,
      recentJob: user.recentJob,
      isStudent: user.isStudent,
      startYear: user.startYear,
      endYear: user.endYear,
      collegeName: user.collegeName,
    };

    return res.status(200).json({
      success: true,
      transformedUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendConnnectionRequest = async (req, res) => {
  const { receiverId } = req.body;

  try {
    const receiver = await User.findById(receiverId);

    const sender = await User.findById(req.user._id);

    if (!receiver) {
      return res.status(400).json({ message: "User not found" });
    }

    const receiverConnected = receiver.ConnectedTo.includes(req.user._id);
    if (receiverConnected) {
      return res
        .status(400)
        .json({ message: "You are already connected to this user" });
    }

    const connnectionSocket = Array.from(io.sockets.sockets.values());

    const receiverSocket = connnectionSocket.find(
      (socket) => socket.user._id.toString() === receiverId.toString()
    );
    if (!receiverSocket) {
      return res.status(400).json({ message: "User not found" });
    }

    if (receiverSocket) {
      receiverSocket.emit("connection-request", {
        from: {
          id: sender._id,
          name: `${sender.firstName} ${sender.lastName}`,
        },
      });
    }

    return res.status(200).json({
      success: true,
      message: `Request sent to ${receiver.firstName} ${receiver.lastName}`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllConnected = async (req, res) => {
  try {
    const me = User.findById(req.user._id).populate(
      "ConnectedTo",
      "name collegeName "
    );
  } catch (error) {
    console.log(error);
  }
};
