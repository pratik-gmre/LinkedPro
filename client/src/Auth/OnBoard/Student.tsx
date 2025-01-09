
import axios from "axios";
import React, { useState } from "react";

import {  useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

interface Props {
  setComponent: React.Dispatch<React.SetStateAction<number>>;
}

export const Student = ({ setComponent }: Props) => {
  const [location, setLocation] = useState<string>("");
  const [collegeName, setCollegeName] = useState<string>("");
  const [startYear, setStartYear] = useState<string | null>(null);
  const [endYear, setEndYear] = useState<string | null>(null);


  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/onboarding",
        {
          step: 2,
          location,
          collegeName,
          startYear,
          endYear,
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
      if(response.status === 200){
          navigate('/onboarding/send-otp');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleStudent = () => {
    setComponent(1);
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
        Your student helps you discover new people and opportunities
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-full p-10 space-y-5">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="location" className="text-sm">
                Location
              </label>
              <input
                id="location"
                className="border h-6  border-black p-3 w-full focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="recentJob" className="text-sm">
                School or College Name
              </label>
              <input
                id="recentJob"
                className="border p-3 border-black w-full h-6 focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="flex w-full space-x-4">
              <StartYearPicker setStartYear={setStartYear} />
              <EndYearPicker setEndYear={setEndYear} />
            </div>

            <div
              onClick={handleStudent}
              className="text-xl font-semibold p-4 flex items-center justify-center text-black hover:cursor-pointer hover:bg-gray-100 rounded-full"
            >
              <button>I'm not a student</button>
            </div>
            <div className="p-4 text-xl font-semibold flex items-center justify-center border text-white hover:cursor-pointer hover:bg-blue-700 rounded-full bg-blue-600">
              <button type="submit" >Continue</button>
            </div>
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
};

const StartYearPicker = ({ setStartYear }) => {
  // Define the year range (from 2024 to 1950)
  const currentYear = new Date().getFullYear();
  const startyear = 1950;
  const endyear = currentYear;

  // Generate years in reverse order from currentYear to startYear
  const years = Array.from(
    { length: endyear - startyear + 1 },
    (_, i) => endyear - i
  );

  const handleChange = (value: string) => {
    setStartYear(value);
  };

  return (
    <div className="w-full">
      <label
        className="block text-xs font-medium leading-6 text-muted-foreground"
        htmlFor="year"
      >
        Start Year
      </label>
      <div className="w-44">
        <Select onValueChange={handleChange}>
          <SelectTrigger id="year">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={String(year)}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

const EndYearPicker = ({ setEndYear }) => {
  // Define the year range (from 2024 to 1950)
  const currentYear = new Date().getFullYear();
  const startYear = 1950;
  const endyear = currentYear;

  // Generate years in reverse order from currentYear to startYear
  const years = Array.from(
    { length: endyear - startYear + 1 },
    (_, i) => endyear - i
  );

  const handleChange = (value: string) => {
    setEndYear(value);
  };

  return (
    <div className="w-full">
      <label
        className="block text-xs font-medium leading-6 text-muted-foreground"
        htmlFor="year"
      >
        End Year
      </label>
      <div className="w-44">
        <Select onValueChange={handleChange}>
          <SelectTrigger id="year">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={String(year)}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
