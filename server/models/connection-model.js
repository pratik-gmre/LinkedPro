import mongoose from "mongoose";



const connectionSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: String,
        enum: ["stranger","pending", "accepted", "rejected"],
        default: "stranger",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



export const Connection = mongoose.model("Connection", connectionSchema);