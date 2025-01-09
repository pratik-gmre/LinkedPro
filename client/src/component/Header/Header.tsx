import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HComponent } from "./HComponent";



export const Header = () => {
  return (
    <div className="shadow bg-white h-14">

      <div className=" w-[80%]  mx-auto h-full flex items-center justify-between ">


        <div className="flex items-center justify-center space-x-3 ">
          <div>
            <Link to={"/feed"}>
              <img
                className="h-12 w-12"
                src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                alt=""
              />
            </Link>
          </div>
          <div>
            <SearchBar/>
          </div>
        </div>

        <div className="h-full">
        <HComponent/>
        </div>




      </div>

    </div>

  );
};
