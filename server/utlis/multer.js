import dotenv from 'dotenv';
dotenv.config();
import multer from "multer";
import {CloudinaryStorage} from'multer-storage-cloudinary';



import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'public/images', // Optional folder in Cloudinary
      format: async (req, file) => file.mimetype.split('/')[1], // Extract file extension

      public_id: (req, file) => Date.now() + '-' + file.originalname, // Unique public ID
    },
  });


export const upload  = multer({storage})
export default cloudinary;



