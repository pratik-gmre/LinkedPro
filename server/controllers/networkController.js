import User from "../models/user-model.js";


export const allMyNetwork = async(req,res)=>{ 
    try {
        


        const allUsers = await User.find()


        const allMyNetwork = allUsers.filter((user) => user._id.toString() !== req.user._id.toString())

return res.status(200).json({ 
    message:"all my network",
    allMyNetwork
})

    } catch (error) {
        console.log(error);
        
    }
}