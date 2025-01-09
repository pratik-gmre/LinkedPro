import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    commentContent:{ 
        type:String,
        required:true,
        unique:true

    }
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);

