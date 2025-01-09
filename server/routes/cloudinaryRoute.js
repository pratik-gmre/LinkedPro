import express from "express";
import { ImageUpload } from "../controllers/cloudinaryController.js";
import { upload } from "../utlis/multer.js";



export const cloudinaryRoute = express.Router()



cloudinaryRoute.route('/post-images').post(upload.array('postImages',4),ImageUpload)