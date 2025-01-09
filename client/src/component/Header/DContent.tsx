import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const DContent = () => {

const {user}  = useSelector((state:any) => state.User)


const navigaate = useNavigate()

const handleProfile = () => {
  navigaate(`/in/${user.linkedId}`)
}

  return (
    <div className="space-y-1 p-3">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-start space-x-4">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>My data</div>
        </div>
        <div>
          <Button onClick={handleProfile} variant="outline" size="sm" className="border-blue-600">
            <span className="text-blue-600 font-semibold">View Profile</span>
          </Button>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col space-y-1">
        <span className="font-semibold text-base">Accout</span>
        <span className="text-sm text-muted-foreground cursor-pointer  hover:underline">
          Setting & Privacy
        </span>
        <span className="text-sm text-muted-foreground cursor-pointer  hover:underline">
          Language
        </span>
        <span className="text-sm text-muted-foreground cursor-pointer  hover:underline">
          Help
        </span>
      </div>
      <Separator />
      <div className="flex flex-col  space-y-1">
        <span className="font-semibold text-base">Manage</span>

        <span className="text-sm text-muted-foreground cursor-pointer hover:underline">
          Post & Activity
        </span>
        <span className="text-sm text-muted-foreground cursor-pointer  hover:underline">
          Job Activity
        </span>
      </div>
      <Separator />
      <div>
        <span className="text-sm text-muted-foreground cursor-pointer">
          Log out
        </span>
      </div>
    </div>
  );
};
