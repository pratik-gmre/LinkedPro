import mongoose, { Schema, Types } from "mongoose";

const postSchema = new Schema(
  {
    owner: {
      type: Types.ObjectId,
      ref: "User",
    },
    desc: {
      type: String,
      max: 50,
      required: true,
    },
    img: [
      {
        public_id: {
          type: String,
        },
        url: {
          type: String,
        },
      },
    ],
   
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    likedCondition:{ 
        type:Boolean,
        default:false
    },
    likedBy: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    commentInfo: [
      {
        type: Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", postSchema);
