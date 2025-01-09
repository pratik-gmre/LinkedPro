import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Earth,
  ExternalLink,
  MessageSquareText,
  ThumbsUp,
  UserRoundPlus,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

import axios from "axios";
import moment from "moment";

interface Image {
  url: string;
  public_id: string;
}
interface Post {
  owner: {
    name: string;
    collegeName: string;
  };
  img: Image[];
  desc: string;
  _id: string;
  createdAt: string;
  likedCondition:Boolean
  likes: number;
}

interface PostCardProps {
  name: string;
  desc: string;
  postImage: Image[];
  date: string;
  bio: string;
  id: string;
  likedOrNot:Boolean
  likeNumber: number;
}

export const Post = () => {
  const [post, setPost] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/post/get-all-post",
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
        setPost(response.data.allPosts);

        

      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    console.log("Posts updated:", post);
  }, [post]); 

  return (
    <div>
      {post && post.length > 0 ? (
        post.map((p: Post) => (
          <PostCard
            key={p._id}
            id={p._id}
            likedOrNot = {p.likedCondition}
            name={p.owner.name}
            desc={p.desc}
            bio={p.owner.collegeName}
            postImage={p.img}
            date={p.createdAt}
            likeNumber={p.likes}
          />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

const notConnect = true;

const PostCard = ({ desc, name, postImage, date, bio, id ,likedOrNot,likeNumber}: PostCardProps) => {
  const [likes, setLikes] = useState(likeNumber);
  const [comments, setComments] = useState(0);

  const [liked, setLiked] = useState<Boolean>(likedOrNot);

  const handleLikes = () => {
    setLiked((prev) => {
      const newLikedState = !prev;

      setLikes((prevLikes) => newLikedState ? prevLikes + 1 : prevLikes - 1);
      return newLikedState;
    });
  };
  const handleComment = () => {
    setComments(comments + 1);
  };

  // useEffect(() => {
  //   axios.post(
  //     "http://localhost:8080/api/post/updatePost",
  //     {
  //       liked,
  //       commentContent: comments,
  //       _id: id,
  //     },
  //     {
  //       withCredentials: true,
  //     }
  //   );
  // }, [liked, comments, id]);

  return (
    <div className=" bg-white">
      <div className=" flex justify-between p-5">
        <div className="flex space-x-3">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col text-xs">
            <div className="font-semibold">{name}</div>
            <div>{bio}</div>
            <div className="flex space-x-1">
              {moment(date).fromNow()} .{" "}
              <Earth className="text-muted-foreground mt-auto" size={"15"} />
            </div>
          </div>
        </div>
        <div>
          {notConnect ? (
            <>
              <div className="flex space-x-3 text-blue-700 hover:cursor-pointer font-semibold">
                <UserRoundPlus />
                <h1>Connect</h1>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className=" p-2 text-sm">{desc}</div>
      <div>
        {" "}
        <img src={postImage[0].url} alt="" />
      </div>
      <div className="">
        <div className="flex justify-between  mt-2 items-center px-2">
          {likes > 0 ? (
            <div className="flex space-x-2 justify-center items-center">
              <img className="h-5 w-5" src="/lliked.png" alt="" />
              <div className="text-sm">{likes}</div>
            </div>
          ) : (
            <div></div>
          )}
          {comments > 0 ? (
            <div className="flex text-sm space-x-2 justify-center items-center">
              <div>{comments} comments</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <Separator />

        <div className="  mt-1 cursor-pointer flex justify-between items-center  px-2 font-semibold text-sm">
          <div
            onClick={handleLikes}
            className=" flex space-x-2 hover:bg-gray-100 w-full p-2"
          >
            {liked ? (
              <div className="flex justify-center items-center space-x-2">
                <img className="h-6 w-6" src="/lliked.png" alt="" />
                <h1 className="text-blue-500">Liked</h1>
              </div>
            ) : (
              <div className="flex justify-center items-center space-x-1">
                <div className="h-6 w-6">
                  <ThumbsUp size={"20"} />
                </div>
                <h1>Like</h1>
              </div>
            )}
          </div>

          <div
            onClick={handleComment}
            className="  flex space-x-2 w-full hover:bg-gray-100  p-2"
          >
            <MessageSquareText size="20" />
            <h1>Comment</h1>
          </div>

          <div className="flex  space-x-2 justify-end  hover:bg-gray-100 w-full  p-2">
            <ExternalLink size="20" />
            <h1>Share</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
