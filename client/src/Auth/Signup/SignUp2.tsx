import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";

export const SignUp2 = () => {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");

  const navigate = useNavigate();

  const handleSignup2 = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          step: 2,
          firstName,
          lastName,
        },
        { withCredentials: true }
      );
      if(response.status === 200){
        toast.success("Account updated successfully",{ 
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
          iconTheme:{ 
            primary: "#4ade80",
            secondary: "#FFFAEE",
          }
        });
      }

      console.log("Success:", response.data);
      if (response.status === 200) {
        navigate("/onboarding");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="w-[80%] m-auto">
        <img
          className="h-24 w-36"
          src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png"
          alt="LinkedIn Logo"
        />
      </div>
      <div className="text-3xl font-medium w-full flex items-center justify-center">
        Make the most of your professional life
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-full p-10 shadow-xl space-y-5">
          <form onSubmit={handleSignup2} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="fname" className="font-semibold">
                First Name
              </label>
              <input
                id="fname"
                className="border  border-black p-3 w-full h-full focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="lname" className="font-semibold">
                Last Name
              </label>
              <input
                id="lname"
                className="border p-3 border-black w-full h-full focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                required
              />
            </div>

            <div className="p-4 flex items-center justify-center border text-white hover:cursor-pointer hover:bg-blue-700 rounded-full bg-blue-600">
              <button type="submit">Continue</button>
            </div>
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
};
