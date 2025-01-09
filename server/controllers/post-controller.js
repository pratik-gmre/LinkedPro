import { Comment } from "../models/comment-model.js";
import { Post } from "../models/post-model.js";
import User from "../models/user-model.js";

import cloudinary from "../utlis/multer.js";

export const createPost = async (req, res) => {
  try {
    const { desc } = req.body;
    console.log(desc);
    const { file } = req;

    const { _id: userId } = req.user;

    if (!req.file) {
      return res.status(400).json({ message: "No image data received" });
    }

    const userDetails = await User.findById(userId);
    console.log(userDetails);

    const result = await cloudinary.uploader.upload(file.path, {
      allowed_formats: ["jpg", "png", "jpeg"],
      folder: "posts",
    });
    console.log("Cloudinary upload result:", result);

    const data = [
      {
        public_id: result.public_id,
        url: result.url,
      },
    ];

    const newPost = new Post({
      owner: userDetails,
      desc,
      img: data[0],
    });

    await newPost.save();

    res.status(200).json({
      message: "Post created successfully",
      desc,
      owner: userDetails,
      postImages: data[0],
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { liked, _id, commentContent } = req.body;

    const post = await Post.findById(_id);
    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    let newComment;
    if (commentContent) {
      newComment = await Comment.create({
        user: req.user._id,
        postId: post._id,
        commentContent,
      });

      post.commentInfo.push(newComment._id);

      post.comments = post.commentInfo.length;
    }

    if (liked) {
      post.likedBy.push(req.user._id);

      User.findByIdAndUpdate(
        req.user._id,
        { likedPost: post._id },
        { new: true }
      );
      Post.findByIdAndUpdate(_id, { likedCondition: true });
    }
    post.likes = post.likedBy.length;

    await post.save();

    const updatedPost = await Post.findById(_id)
      .populate("owner", "name collegeName")
      .populate("likedBy", "name email")
      .populate({
        path: "commentInfo",
        populate: { path: "user", select: "name collegeName" },
      });

    return res.status(200).json({
      message: "Post updated successfully",
      updatedPost,
      alreadyLiked,
      newComment,
    });
  } catch (error) {
    console.error("Error updating post:", error);
    return res.status(500).json({ message: "An error occurred", error });
  }
};

export const getAllPost = async (req, res) => {
  try {
    console.log("requested");

    const allPosts = await Post.find()
      .populate("owner", "name collegeName")
      .populate("likedBy", "name collegeName")
      .populate({
        path: "commentInfo",
        populate: { path: "user", select: "name collegeName" },
      });

    allPosts.forEach((post) => {
      const likeBoolean = post.likedBy.some(
        (user) => user._id.toString() === req.user._id.toString()
      );

      if (likeBoolean) {
        post.likedCondition = true;
      }
    });

    return res.status(200).json({
      message: "Posts fetched successfully",
      allPosts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMyPost = async (req, res) => {
  try {
    const myPost = await Post.find({ owner: req.user._id })
      .populate("likedBy", "name collegeName")
      .populate({
        path: "commentInfo", // Populate commentInfo
        populate: { path: "user", select: "name collegeName" }, // Nested populate for user inside commentInfo
      });

    return res.status(200).json({
      success: true,
      myPost,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deltePost = async (req, res) => {
  try {
    const post = await Post.deleteMany();
    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    console.log(error);
  }
};
