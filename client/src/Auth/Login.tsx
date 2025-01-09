import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [email,setEmail] = React.useState("")
  const [password,setPassword] = React.useState("")

  const navigate = useNavigate()

const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{ 
  e.preventDefault()

  try {
    const response = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password
    },{withCredentials:true})

    console.log(response.data);
    if(response.status === 200){
      navigate("/feed")
    }
    
  } catch (error) {
    console.log(error);
    
    
  }
  
}



  return (
    <div className="bg-white">
      <div className="w-[80%] m-auto">
        <img
          className="h-24 w-36 "
          src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png"
          alt=""
        />
      </div>

      <div className="h-full w-full  flex  flex-col justify-center items-center">
        <div className="h-full   p-10 shadow-xl space-y-5">
          <div className="p-3 space-y-1">
            <h1 className="text-3xl font-semibold">Sign in</h1>
            <h1 className="text-sm">
              Stay updated on your professional world.
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="border p-4 border-black">
          <input
    className="border-none w-full h-full focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
  />
          </div>
          <div className="border p-4 border-black">
          <input
    className="border-none w-full h-full focus:outline-none focus:border-2 focus:border-blue-600 placeholder:text-lg"
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    
  />
          </div>
          <div className="text-blue-600 font-semibold ">
            <span className="hover:cursor-pointer hover:underline">
              Forget Password ?
            </span>
          </div>
          <div className="p-5 flex items-center justify-center border text-white hover:cursor-pointer hover:bg-blue-700 rounded-full bg-blue-600 tex">
            <button type="submit">Sign in</button>
          </div>
          </form>
          <hr />
          <div className="flex items-center justify-center space-x-2 border p-4 rounded-full border-black">
            {" "}
            <img
              className="h-6 w-6"
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt=""
            />
            <h1>Sign in with Google</h1>
          </div>
        </div>
        <div className="flex  items-center justify-center mt-3 p-3">
          <h1>New to LinkedIn ?</h1>
          <button onClick={()=>(navigate("/signup"))} className="text-blue-600 font-semibold hover:underline hover:cursor-pointer ">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};
