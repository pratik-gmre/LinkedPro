import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
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

// TypeScript Types
interface OtpInputProps {
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  Received: boolean;
}

interface PhoneNumberInputProps {
  setNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const Send = () => {
  const [phone, setPhone] = useState<string>("");
  const [received, setReceived] = useState<boolean>(false);
  const [hash, setHash] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/onboarding/send-otp",
        { phone },
        { withCredentials: true }
      );
      if(response.status === 200){ 
        toast.success("OTP sent successfully",{ 
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

      if (response) {
        setHash(response.data.hash);
      }
      if (response.status === 200) {
        setReceived(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/onboarding/verify-otp",
        {
          phone,
          hash,
          otp,
        },
        { withCredentials: true }
      );

      if(response.status === 200){
        toast.success("Good job! Account updated successfully",{ 
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
      if (response.status === 200) {
        setReceived(true);
      }
      if (response) {
        navigate("/feed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white ">
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

      <div className="h-full w-full flex flex-col justify-center items-center mb-7">
        <div className="w-96 pt-10 ">
          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            <PhoneNumberInput setNumber={setPhone} />
            <div className="flex justify-end items-center">
              <button
                disabled={received}
                className="disabled:cursor-not-allowed disabled:bg-blue-400 border hover:bg-blue-500 bg-blue-400 text-white w-full h-10"
              >
                {received ? "You have received OTP" : "Send OTP"}
              </button>
            </div>
          </form>
          <hr />
        </div>
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="w-96 pt-10 ">
          <form onSubmit={handleSubmit2} className="space-y-5 w-full">
            <div className="flex flex-col justify-center items-center space-y-3">
              <label className="text-md text-muted-foreground" htmlFor="otp">
                Verify your otp *
              </label>
              <OtpInput setOtp={setOtp} Received={received} />
            </div>
            <div className="flex justify-center items-center">
              <button
                disabled={!received}
                onClick={handleSubmit2}
                className="disabled:cursor-not-allowed disabled:bg-blue-400 border hover:bg-blue-500 flex justify-center items-center rounded-xl bg-blue-400 p-6 text-white h-10"
              >
                Verify
              </button>
            </div>
          </form>
          <hr />
        </div>
      </div>
    </div>
  );
};

// OTP Input Component
const OtpInput = ({ setOtp, Received }: OtpInputProps) => {
  const [otpValue, setOtpValue] = useState<string>("");
  const [isOtpExpired, setIsOtpExpired] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(120);

  useEffect(() => {
    if (countdown > 0 && !isOtpExpired) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    if (countdown === 0) {
      setIsOtpExpired(true);
    }
  }, [countdown, isOtpExpired]);

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtpValue(e.target.value);
    setOtp(e.target.value); // Update the parent state with the OTP value
  };

  const handleResendOtp = () => {
    setIsOtpExpired(false);
    setCountdown(120);
    setOtpValue(""); // Clear the OTP input field
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter OTP"
          className="border text-gray-500 p-3 rounded-md placeholder:justify-center items-center"
          value={otpValue}
          onChange={handleOtpChange}
        />
      </div>
      <div className="flex space-x-4 justify-between items-center mb-4">
        <span className="text-sm text-gray-500">
          {isOtpExpired
            ? "OTP Expired"
            : Received
            ? `Time Remaining: ${Math.floor(countdown / 60)}:${(countdown % 60)
                .toString()
                .padStart(2, "0")}`
            : "OTP not received yet"}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={handleResendOtp}
          disabled={!isOtpExpired}
          className="flex items-center space-x-2"
        >
          <Mail />
          <div>{isOtpExpired ? "Resend OTP" : "Resend In Progress"}</div>
        </Button>
      </div>
      {isOtpExpired && (
        <p className="text-center text-sm text-blue-600">
          OTP has expired, please request a new one.
        </p>
      )}
    </div>
  );
};

// Phone Number Input Component
const PhoneNumberInput = ({ setNumber }: PhoneNumberInputProps) => {
  const [countryCode, setCountryCode] = useState<string>("+1");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const countryCodes = [
    { code: "+1", country: "United States" },
    { code: "+20", country: "Egypt" },
    { code: "+33", country: "France" },
    { code: "+49", country: "Germany" },
    { code: "+55", country: "Brazil" },
    { code: "+62", country: "Indonesia" },
    { code: "+63", country: "Philippines" },
    { code: "+66", country: "Thailand" },
    { code: "+81", country: "Japan" },
    { code: "+82", country: "South Korea" },
    { code: "+86", country: "China" },
    { code: "+91", country: "India" },
    { code: "+92", country: "Pakistan" },
    { code: "+93", country: "Afghanistan" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+95", country: "Myanmar" },
    { code: "+98", country: "Iran" },
    { code: "+44", country: "United Kingdom" },
    { code: "+234", country: "Nigeria" },
    { code: "+252", country: "Somalia" },
    { code: "+355", country: "Albania" },
    { code: "+354", country: "Iceland" },
    { code: "+965", country: "Kuwait" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+971", country: "United Arab Emirates" },
    { code: "+60", country: "Malaysia" },
    { code: "+977", country: "Nepal" },
    { code: "+972", country: "Israel" },
    { code: "+39", country: "Italy" },
    { code: "+41", country: "Switzerland" },
    { code: "+64", country: "New Zealand" },
    { code: "+254", country: "Kenya" },
  ];

  useEffect(() => {
    setNumber(countryCode + phoneNumber);
  }, [phoneNumber, setNumber, countryCode]);

  return (
    <div className="space-y-4 w-full">
      <label
        htmlFor="phoneNumber"
        className="block text-sm text-muted-foreground"
      >
        Enter your Phone Number *
      </label>
      <div className="flex items-center space-x-2 w-full h-full">
        <Select onValueChange={setCountryCode} value={countryCode}>
          <SelectTrigger className="border p-2 rounded-md">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {countryCodes.map((item) => (
              <SelectItem key={item.code} value={item.code}>
                {item.code} - {item.country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <input
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border p-2 rounded-md w-full h-full"
          placeholder="Enter phone number"
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
