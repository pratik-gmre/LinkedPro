import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";
// import { setEmail } from "../../redux/authSlices";

interface Props {
  setComponent: React.Dispatch<React.SetStateAction<number>>;
}

const SignUp = ({ setComponent }: Props) => {
  const [email, setEmailAddress] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleComponent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          step: 1,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log("Success:", response.data);
      if(response.status === 200){
        toast.success("Account created successfully",{ 
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

      if (response.status === 200) {
        setComponent(2);
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Error response:", error.response);
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  };

  return (
    <div className="bg-white">
      <div className="w-[80%] m-auto">
        <img
          className="h-24 w-36 "
          src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png"
          alt="LinkedIn Logo"
        />
      </div>
      <div className="text-3xl font-medium w-full flex items-center justify-center">
        Make the most of your professional life
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="h-full p-10 shadow-xl space-y-5">
          <form onSubmit={handleComponent} className="space-y-5">
            <div className="space-y-1">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                id="email"
                className="border border-black p-4 w-full h-full focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
                value={email}
                onChange={(e) => setEmailAddress(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="font-semibold">
                Password (6+ characters)
              </label>
              <input
                id="password"
                className="border p-4 border-black w-full h-full focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                minLength={6}
              />
            </div>
            <div className="flex flex-col items-center justify-center text-xs text-slate-600">
              <h1>By clicking Agree & Join, you agree to the </h1>
              <h1 className="text-blue-500">
                LinkedIn User Agreement, Privacy Policy, and Cookie Policy.
              </h1>
            </div>
            <button
              className="w-full"
              type="submit"
              onClick={() => {
                console.log("clicked");
              }}
            >
              <div className="p-4 flex items-center justify-center border text-white hover:cursor-pointer hover:bg-blue-700 rounded-full bg-blue-600">
                Agree & Join
              </div>
            </button>
            <hr />
            <div className="flex items-center justify-center space-x-2 border p-3 rounded-full border-black hover:cursor-pointer hover:bg-gray-100">
              <img
                className="h-6 w-6"
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google Icon"
              />
              <h1>Continue with Google</h1>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-3 p-3 space-x-1">
          <h1>Already on LinkedIn?</h1>
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline hover:cursor-pointer "
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
