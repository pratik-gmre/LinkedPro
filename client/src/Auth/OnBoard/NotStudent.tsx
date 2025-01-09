import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  setComponent: React.Dispatch<React.SetStateAction<number>>;
}

export const NotStudent = ({ setComponent }: Props) => {
  const [location, setLocation] = useState<string>("");
  const [recentJob, setRecentJob] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/onboarding",
        {
          step: 1,
          location,
          recentJob,
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleStudent = () => {
    setComponent(2);
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
      <div className="text-2xl font-medium w-full flex items-center justify-center">
        Your profile helps you discover new people and opportunities
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-full p-10  space-y-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="location" className="font-semibold">
                Location
              </label>
              <input
                id="location"
                className="border  border-black p-3 w-full h-full focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="job" className="font-semibold">
                Most recent job
              </label>
              <input
                id="job"
                className="border p-3 border-black w-full h-full focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
                value={recentJob}
                onChange={(e) => setRecentJob(e.target.value)}
                type="text"
                required
              />
            </div>

            <div className="p-4 flex text-xl font-semibold items-center justify-center  text-black hover:cursor-pointer hover:bg-gray-100 rounded-full ">
              <button onClick={handleStudent}>I'm a student</button>
            </div>
            <div className="p-4 flex text-xl font-semibold items-center justify-center border text-white hover:cursor-pointer hover:bg-blue-700 rounded-full bg-blue-600">
              <button
                type="submit"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                Continue
              </button>
            </div>
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
};
