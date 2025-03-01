"use client"

import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/config";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_URL}/api/user/signin`,{username:username,password:password})
            localStorage.setItem('token',response.data.token)
            window.location.href = "/dashboard";
        } catch (error) {
            setError(true);
        }
    } 

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="border-2 border-slate-800 p-10 rounded-2xl shadow-lg w-96 relative">
        
        <div className="flex justify-center mb-5">
          <img src="logo.png" alt="Zenith Logo" className="w-20 h-20 rounded-xl" />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-3">Log in Zenith</h1>
        <p className="text-gray-400 text-center mb-6">Welcome back, please enter your details.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-lg mb-2">Email</label>
            <Input
              type="email"
              placeholder="your@email.com"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-5">
            <label className="block text-lg mb-2">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200  transition-all"
          >
            Log in
          </button>
            {error && <p className="text-red-500 text-center mt-2">Invalid credentials</p>}
        </form>


        <div className="text-center text-gray-400 mt-5">
          Don't have an account? <a href="/signup" className="text-blue-300 hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;