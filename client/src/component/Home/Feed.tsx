import React, { useEffect } from "react";

import { LeftSideBar } from "../Points/LeftSideBar";
import { Main } from "../Points/Main/Main";
import { RIghtSideBar } from "../Points/RIghtSideBar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { AppLayout } from "../../shared/Applayout";



   const Feed : React.FC<any> = () => {
  const [profile, setProfile] = React.useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/user/profile", { withCredentials: true });
        setProfile(res.data.transformedUser);
        dispatch(setUser({userProfile: profile}))
      } catch (err) {
        console.log(err);
      }
    };
  
    // Call the async function
    fetchProfile();
  }, []);
  

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


export default AppLayout(Feed);
