import cloudinary from "../utlis/multer.js";


export const ImageUpload = async (req, res) => {
    try {
        const uploadResults = [];

       

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files provided' });
        }

        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path);
            uploadResults.push(result);
        }
        const data = uploadResults.map((result)=> ({ 
            public_id:result.public_id,
            url:result.url
        }))

        return res.status(200).json({ 
            message: 'Images uploaded successfully',
            results: data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error uploading image', error });
    }
};
