import { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { link } from "fs";

const initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    linkedInId: "",
    location: "",
    isStudent: false,
    startYear: 0,
    endYear: 0,
    collegeName: "",
  } as User
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {userProfile} = action.payload
      state.user = userProfile
      
      
    },
  },
});





export const { setUser } = userSlice.actions;
export default userSlice.reducer;