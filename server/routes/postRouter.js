import express from "express";
import {  isAuthentication } from "../middlewares/auth.js";
import { createPost, deltePost, getAllPost, getMyPost, updatePost } from "../controllers/post-controller.js";
import { upload } from "../utlis/multer.js";
import { get } from "mongoose";


export const postRouter = express.Router();



postRouter.route("/create-post").post(isAuthentication,upload.single('postImages'),createPost);
postRouter.route("/get-all-post").get(isAuthentication,getAllPost);
postRouter.route("/get-my-post").get(isAuthentication,getMyPost);
postRouter.route("/delete").post(isAuthentication,deltePost);
postRouter.route("/update-post").post(isAuthentication,updatePost);
