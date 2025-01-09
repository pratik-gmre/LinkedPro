import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Image, SquarePlay, Calendar, Plus, ChevronDown } from "lucide-react";
import axios from "axios";
import { setPost } from "@/redux/postSlice";
import { url } from "inspector";
import toast from "react-hot-toast";

// Reusable TooltipIcon Component
const TooltipIcon = ({ icon: Icon, tooltipText, onClick }: any) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div onClick={onClick} className="cursor-pointer">
          <Icon size={20} />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <span>{tooltipText}</span>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const CreatePost = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [ open ,setOpen ]  = useState(false)

  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.User);

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      // Preview for user
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result); // Base64 for preview
      reader.readAsDataURL(file);
    }
  };

  const previewFiles = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImage(reader.result);
  };

  const handleFileUpload = ()=>{ 
    fileInputRef.current.click();

  }

  const handleSubmit = async () => {
    if(!image){
      return
    }

    const formData = new FormData();
    formData.append("postImages", fileInputRef.current.files[0]);
    formData.append("desc", description);
    try {

      const response = await axios.post(
        "http://localhost:8080/api/post/create-post",
        formData,
      
        {
          
          headers: {
            "Content-Type": "multipart/form-data", // Essential for file uploads
          },
          withCredentials: true }
      );
      if(response.status === 200){
        toast.success("You created a post",{ 
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
      console.log(response);

      if(response.status === 200){
        setOpen(false)
       dispatch(setPost({
        owner:response.data.owner,
        description:response.data.desc,
        public_id:response.data.postImages.public_id,
        url:response.data.postImages.url
       }))
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full bg-white p-3">
      {/* Avatar and Input */}
      <div className="flex justify-center items-center space-x-3">
        <div className="w-[10%] cursor-pointer" onClick={() => navigate(`/in/${user.linkedId}`)}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-[90%]">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="w-full">
              <Input className="rounded-full w-full cursor-pointer" placeholder="Start a post" />
            </DialogTrigger>
            <DialogContent className="p-7 border">
              <DialogHeader>
                <DialogTitle>Create Post</DialogTitle>
                <DialogDescription>
                  {/* Post Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold text-lg">{user?.name}</span>
                        <ChevronDown size={14} />
                      </div>
                      <span className="text-sm">Post to anyone</span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="border h-80 overflow-y-auto p-3">
                    <Input
                      className="border-none focus:ring-0 outline-none"
                      placeholder="What's on your mind?"
                      value={description}
                      onChange={handleChange}
                    />
                    {image && <img src={image} alt="Preview" className="w-full mt-2 rounded" />}
                  </div>
                </DialogDescription>
              </DialogHeader>

              {/* Post Actions */}
              <div className="flex items-center space-x-4 mt-4">
                <TooltipIcon
                  icon={Image}
                  tooltipText="Upload Image"
                  onClick={handleFileUpload}
                />
                <TooltipIcon icon={SquarePlay} tooltipText="Upload Video" />
                <TooltipIcon icon={Calendar} tooltipText="Schedule" />
                <TooltipIcon icon={Plus} tooltipText="Add More" />
              </div>
              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />

              <DialogFooter>
                <Button onClick={handleSubmit} className="bg-blue-600 text-white">
                  Post
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Footer Icons */}
      <Separator className="mt-4" />
      <div className="flex justify-between items-center mt-4 px-2">
        {["Media", "Video", "Event"].map((label, index) => (
          <div
            key={index}
            className="flex space-x-2 items-center p-2 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <Image size={20} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
