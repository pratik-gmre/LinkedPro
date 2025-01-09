import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DContent } from "./DContent";
import { useSelector } from "react-redux";



export const UserProfile = () => {


  
  
  return (
    <div className="cursor-pointer">
      <Avatar className="h-6 w-6">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-center">
            <span className="text-xs">Me</span>

            <ChevronDown size={14} />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DContent />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
