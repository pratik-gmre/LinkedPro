import { cn } from "@/lib/utils";
import { Network, UserRoundPlus } from "lucide-react";
import React, { useEffect, useState } from "react";

import axios from "axios";


interface Network{ 
  _id: string,
  name: string,
  img: string,
  collegeName: string
}

interface NetworkChildProps{ 
  name: string,

  collegeName:string
}

export const MainNetwork = () => {
  const [grow, setGrow] = React.useState(true);
  const [isActive, setIsActive] = React.useState(true);

  const handleGrow = () => {
    setGrow(true);
    setIsActive(true);
  };

  const [networks, setNetwork] = useState([]);

  useEffect(() => {
    const fetchNetwork = async () => {
      const response = await axios.get(
        "http://localhost:8080/api/mynetwork/grow/",
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
      setNetwork(response.data.allMyNetwork);
    };
    fetchNetwork();
  }, []);

  useEffect(() => {
    console.log("this is neetwork", networks);
  }, [networks]);

  return (
    <>
      <div className="flex flex-col w-[70%] ">
        <div className="border  bg-white h-14 rounded-xl">
          <div className=" flex  h-full font-semibold ">
            <div
              onClick={handleGrow}
              className={cn(
                "flex justify-center items-center hover:bg-slate-100 p-6 ml-8 cursor-pointer",
                isActive ? "border-b-2 border-green-950 text-green-950" : ""
              )}
            >
              <h1>Grow</h1>
            </div>
            <div className="flex justify-center items-center hover:bg-slate-100 p-6">
              <h1>Catch up</h1>
            </div>
          </div>
        </div>

        {grow && (
          <>
            <div className=" flex  justify-between items-center p-3 rounded-xl mt-4    bg-white h-14 w-full">
              <div className="">
                <h1>No pending invitations</h1>
              </div>
              <div>
                <h1 className="text-muted-foreground font-semibold"> Manage</h1>
              </div>
            </div>



            <div className=" bg-white h-full w-full p-3 mt-4">
              <div className="flex justify-between">
                <div>People you may know</div>
                <div className="font-semibold"> Show all</div>
              </div>
            
                {networks && networks.length > 0 ? (
                   <div className=" mt-3 space-x-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto">

                   
                     {networks.map((network:Network) => <NetworkCard  name={network.name} collegeName={network.collegeName} />)}
                 </div>
                ) : (
                  <div>No Network</div>
                )}
              </div>

          </>
        )}
      </div>
    </>
  );
};

const NetworkCard = ({name, collegeName}:NetworkChildProps) => {
  return ( 
    <div className="h-72  w-52 flex flex-col rounded-2xl justify-center  border items-center">
      <div className="h-[60%] flex items-start justify-center w-full  relative overflow-hidden">


        <div className="h-[60%] rounded-t-2xl  bg-gray-200 w-full "></div>
        <div className="absolute h-[65%] w-[60%] left-1/2 transform bg-white -translate-x-1/2 rounded-full bottom-0  border ">
        
        <img className="h-full w-full rounded-full" src="/empty-profile-pic.png" alt="profile" />
        </div>
      </div>



      <div className="h-[20%]  flex flex-col items-center justify-center w-full ">
        <div className="font-semibold">{name}</div>

        <div className="text-xs text-muted-foreground break-words p-1 flex items-center justify-center w-full ">{collegeName}</div>
      </div>
      <div className="h-[20%] flex items-center justify-center  w-full ">
      <button className="flex items-center justify-center border hover:border-2 hover:text-blue-800 border-blue-700 hover:bg-gray-50 h-auto rounded-3xl p-2  space-x-2 text-blue-700 hover:cursor-pointer font-semibold">
                <UserRoundPlus size={"20"} className="ml-2" />
                <h1 className="px-1">Connect</h1>
              </button>
      </div>
    </div>
  )
};
