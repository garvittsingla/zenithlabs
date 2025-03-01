"use client"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from 'axios'
import { BACKEND_URL } from "../config/config";


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


 
  const handleSubmit = async(e:any) => {
    e.preventDefault();
    ;
    console.log(username)
    console.log(password)
    
    //@ts-ignore
   try {
        const response =await axios.post(`${BACKEND_URL}/api/user/signup`,{username:username,password:password})
        console.log(response)
        alert("Sign up successful!, Please login to continue");
        window.location.href = "/signin";
    
   } catch (error) {
         setError(true);
   }
    
   
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="bg-/90 border-2 border-slate-800 w-96 p-8 rounded-lg shadow-xl relative">
        
        <div className="flex justify-center mb-4">
          <img src="logo.png" alt="Zenith Logo" className="w-20 h-20 rounded-lg" />
        </div>
        
        <h1 className="text-2xl font-semibold text-center mb-2">Sign up Zenith</h1>
        <p className="text-gray-400 text-center mb-6">We just need a few details to get you started.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-lg mb-1" htmlFor="email">Email</label>
            <Input
              type="email"
              id="username"
              placeholder="your@email.com"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              onChange={(e)=>setUsername(e.target.value)}
              value={username}
            />
          </div>

          <div>
            <label className="block text-lg mb-1" htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
          </div>
          {error && <p className="text-red-500 text-center mt-2">User Already exists</p>}
          
          <button
            type="submit"
            className="w-full p-3 bg-white text-black font-semibold rounded hover:bg-gray-200"
          >
            Sign up
          </button>

        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account? <a href="/signin" className="text-blue-400 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;