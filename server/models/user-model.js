import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
   name:{ 
    type:String
   },
    avatar: {
      public_id: String,
      url: String,
    },
    isStudent: {
      type: Boolean,
    },
    likedPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    collegeName: {
      type: String,
    },
    location: {
      type: String,
    },
    recentJob: {
      type: String,
    },
    startYear: {
      type: Number,
    },
    endYear: {
      type: Number,
    },
    about: {
      type: String,
    },
    education: {
      type: String,
    },
    Skills: {
      type: String,
    },
    ConnectedTo:[{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }]
   
  },
  { timestamps: true }
);

 const User = mongoose.models.User || mongoose.model("User", authSchema);
 export default User;
