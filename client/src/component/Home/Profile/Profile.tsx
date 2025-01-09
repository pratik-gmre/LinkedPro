import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Center } from "./Center";

import { Pencil, UserRoundPlus } from "lucide-react";

const users = [
  {
    id: 1,
    name: "John Doe",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    professionalTags: "Computer Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    professionalTags: "Consultant",
  },
  {
    id: 3,
    name: "Michael Johnson",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    professionalTags: "UI/UX Designer",
  },
  {
    id: 4,
    name: "Emily Davis",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    professionalTags: "Data Scientist",
  },
  {
    id: 5,
    name: "David Williams",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    professionalTags: "Marketing Specialist",
  },
  {
    id: 6,
    name: "Sarah Lee",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    professionalTags: "Project Manager",
  },
];

export const Profile = () => {
  const location = useLocation();

  const fullUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;

  return (
    <div className="h-screen w-full overflow-y-auto ">
      <div className="w-[80%]  mx-auto mt-6 space-x-10 flex justify-between  bg-[#f4f2ee] ">
        <Center />
        <Right linkedId={fullUrl} />
      </div>
    </div>
  );
};

const Right = ({ linkedId }) => {
  return (
    <div className="w-[35%] border space-y-2 overflow-hidden">
      <div className="flex flex-col space-y-2 p-4 bg-white rounded-2xl shadow-sm">
        <div className="py-2 space-y-2">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Profile Language</div>
            <div className="hover:cursor-pointer">
              <Pencil size={16} />
            </div>
          </div>

          <div className="text-muted-foreground text-sm">English</div>
        </div>
        <div className="py-2 border-t border-gray-200 space-y-2">
          <div className="font-semibold">Public Profile & URL</div>

          <div className="text-muted-foreground text-sm">{linkedId}</div>
        </div>
      </div>

      <div className="p-4 space-y-3 bg-white rounded-2xl shadow-sm">
        <div>
          <div className="font-semibold">People you may know</div>
          {users.map((user) => (
            <People
              key={user.id}
              img={user.img}
              name={user.name}
              bio={user.professionalTags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const People = ({ img, name, bio }) => {
  return (
    <div className="p-2">
      <div className="flex space-x-2 border-b p-2">
        <div className="w-12 h-12 ">
          <img className="rounded-full" src={img} alt="" />
        </div>
        <div className="flex flex-col items-center justify-start space-y-2 ">
          <div className="flex flex-col items-start justify-start w-full ">
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-muted-foreground">{bio}</div>
          </div>
          <div className="flex space-x-2 border border-black p-1 text-black w-32 rounded-3xl">
            <div className="px-2 flex space-x-1 items-center justify-center">
              <div>
                <UserRoundPlus />
              </div>
              <div className="font-semibold">Connect</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
