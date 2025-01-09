import { BriefcaseBusiness, Check, Eye, MoveRight, Pencil, Plus, UsersRound } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

export const Center = () => {
  const [grow, setGrow] = React.useState(true);
  const [isActive, setIsActive] = React.useState(true);
  const [follow, setFollow] = useState(true);

  const handleGrow = () => {
    setGrow(true);
    setIsActive(true);
  };

  const handleFollowing = () => {
    setFollow((prev) => !prev);
  };
  return (
    <div className="h-screen w-full  bg-[#f4f2ee] space-y-3 overflow-y-auto">
      <div className="h-[55%] shodow-sm rounded-2xl overflow-hidden">
        <div className="h-full">



          <div className="h-[60%]">
            <div className="relative  h-full w-full bg-gray-300">
              <div className="h-[65%] w-full">cver</div>
              <div className="h-[35%] w-full bg-white"> </div>

              <div className="absolute bottom-4 rounded-full left-8 w-36 h-36 border ">
                <img
                  className="h-full w-full rounded-full"
                  src="/empty-profile-pic.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>

          <div className="h-[40%]  bg-white flex flex-col space-y-2  ">
            <div className=" w-[95%] mx-auto  space-y-2 h-">
              <div className="flex justify-between items-center  ">
                <div className="h-full w-full  ">
                  <div className="font-semibold text-xl ">Yubraj Ghimire</div>
                  <div>Student at Pulchowk</div>
                </div>
                <div className=" text-sm font-semibold">
                  Institution of Enginnering(IOE Pulchowk College)
                </div>
              </div>

              <div className="flex items-center justify-start ">
                <div className="text-muted-foreground text-sm">
                  Lalitput ktm
                </div>
                <div className="text-blue-700 font-semibold hover:underline hover:cursor-pointer">
                  . Contact Info{" "}
                </div>
              </div>

              <div className="flex items-center justify-start space-x-3">
                <button className="border border-blue-600 rounded-2xl text-blue-600 font-semibold hover:bg-blue-600 hover:text-white px-3">
                  Open to
                </button>
                <button className="border border-blue-600 rounded-2xl text-blue-600 font-semibold hover:bg-blue-600 hover:text-white px-3">
                  Add Profile section
                </button>
                <button className="border border-blue-600 rounded-2xl text-blue-600 font-semibold hover:bg-blue-600 hover:text-white px-3">
                  Enhance profile
                </button>
                <button className="border border-blue-600 rounded-2xl text-blue-600 font-semibold hover:bg-blue-600 hover:text-white px-3">
                  Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  bg-white p-7  space-y-4">
        <div className="flex flex-col ">
          <div className="text-xl font-semibold">Analytics</div>
          <div className=" flex text-muted-foreground space-x-1 text-sm">
            <Eye size={"20"} />
            <div className="text-sm">Private to you</div>
          </div>
        </div>

        <div className="flex space-x-1 ">
          <div>
            <UsersRound />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1 font-semibold">
              <div>0</div>
              <div>Profile Views</div>
            </div>
            <div className="text-muted-foreground text-sm">
              Update you profile to attract viewers
            </div>
          </div>
        </div>

        <div className="border-t-2 flex justify-center items-center font-semibold space-x-1">
          <div className="mt-3 ">Show all analytics</div>
          <div className="mt-3">
            <MoveRight />
          </div>
        </div>
      </div>



      <div className="flex flex-col  bg-white p-7  space-y-4">
        <div className="flex flex-col ">
          <div className="text-xl font-semibold">Experience</div>
          <div className=" flex text-muted-foreground space-x-1 text-sm">
            
            <div className="text-sm">Showcase your accomplishments and get up to 2X as many profile views and connections</div>
          </div>
        </div>

        <div className="flex  space-x-1 ">
          <div>
            <BriefcaseBusiness />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1 font-semibold">
              
              <div>Job Title</div>
            </div>
            <div className="text-muted-foreground text-sm">
              Organization
            </div>
            <div className="text-muted-foreground text-sm">
              2024 - present
            </div>
          </div>
        </div>
          <div><button className="border border-blue-600 text-blue-600 p-2 rounded-3xl font-semibold"><h1 className="px-2">Add Experience</h1></button></div>

        
      </div>

      <div className="flex flex-col  bg-white p-7  space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Education</div>
          <div className="flex space-x-4 items-center justify-center">
            <div>
              <Plus />
            </div>
            <div>
              <Pencil />
            </div>
          </div>
        </div>

        <div className="flex space-x-1 font-semibold ">
          <div>Institution of Engineering(IOE Pulchowk College)</div>
        </div>
      </div>

      <div className="flex flex-col bg-white p-7  space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Interest</div>
        </div>

        <div>
          <div className=" flex   font-semibold  space-x-3 border-b">
            <div
              onClick={handleGrow}
              className={cn(
                "flex justify-center items-center hover:bg-slate-100 p-3 ml-8 cursor-pointer",
                isActive ? "border-b-2 border-green-950 text-green-950" : ""
              )}
            >
              <h1>Companies</h1>
            </div>
            <div className="flex justify-center items-center hover:bg-slate-100 p-3 hover:cursor-pointer">
              <h1>Schools </h1>
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <div>img</div>
          <div className="flex flex-col space-y-2">
            <div className="font-semibold">Institution of Engineering</div>
            <div className="text-muted-foreground text-sm">999 Followers</div>
            <div>
              <button
                onClick={handleFollowing}
                className={`border-2 p-2 rounded-3xl transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 
      ${
        follow
          ? " text-black  border-black"
          : "bg-white text-black border-gray-500"
      }`}
              >
                <h1 className="font-semibold flex items-center px-2">
                  {follow ? (
                    <>
                      <div className="flex items-center">
                        <Check className="mr-2" />
                        <div>Following</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center">
                        <Plus className="mr-2" />
                        <div>Follow</div>
                      </div>
                    </>
                  )}
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
