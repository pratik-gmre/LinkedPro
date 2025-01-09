import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Feed } from "./component/Home/Feed";
import { MyNetwork } from "./component/Header/Network/MyNetwork";
import { Header } from "./component/Header/Header";
import { Jobs } from "./component/Header/Job/Jobs";
import { Messages } from "./component/Header/Message/Messages";
import { Notification } from "./component/Header/Notification/Notification";
import { Home2 } from "./Auth/home2";
import { Login } from "./Auth/Login";

import { Index } from "./Auth/Signup";

import { IndexStudent } from "./Auth/OnBoard/Index";
import { Send } from "./Auth/Otp/Send";
import { Profile } from "./component/Home/Profile/Profile";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./lib/ProtectedRoute";
import axios from "axios";
import { server } from "./lib/config";

export const App = () => {

  const [user,setUser] = useState(false)


  useEffect(()=>{ 
const fetchUser = async()=>{ 
  console.log(server);
  
  const response = await axios.get(`${server}/api/user/profile`,{withCredentials:true})
  console.log(response.data);
  if(response.status === 200){
    setUser(true)
  }
}
fetchUser();
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Index />} />
          <Route path="/onboarding" element={<IndexStudent />} />
          <Route path="/onboarding/send-otp" element={<Send />} />

          <Route element={<ProtectedRoute user={user} redirect="/login" />}>
          <Route path="/feed$" element={<Feed />}  />
        <Route path="/in/:linkedId" element={<Profile />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="*" element={<Navigate to="/feed" />} />          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </>
  );
};

// const ProtectedRoute = ({ children }) => {
//   return auth ? children : <Navigate to="/auth" />;
// };


