import React, { useEffect } from "react";
import { Header } from "../Header/Header";
import { LeftSideBar } from "../Points/LeftSideBar";
import { Main } from "../Points/Main/Main";
import { RIghtSideBar } from "../Points/RIghtSideBar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";

export const Feed = () => {
  const [profile, setProfile] = React.useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/user/profile", { withCredentials: true });
        setProfile(res.data.transformedUser);
      } catch (err) {
        console.log(err);
      }
    };
  
    // Call the async function
    fetchProfile();
  }, []);
  
  dispatch(setUser({userProfile: profile}))

  return (
    <div className=" w-full h-screen">
      <div className="w-[80%] mx-auto mt-10 space-x-10 flex justify-between border bg-[#f4f2ee] ">
        <LeftSideBar />
        <Main />
        <RIghtSideBar />
      </div>
    </div>
  );
};
