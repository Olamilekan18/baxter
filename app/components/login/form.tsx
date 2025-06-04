"use client";

import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#1A1F19] rounded-3xl shadow-2xl w-full max-w-md p-10">
      <h2 className="text-3xl font-extrabold mb-2 text-center tracking-tight">
        Welcome back
      </h2>
      <p className="text-gray-400 text-center mb-8">
        Access your Baxter account.
      </p>

      <form className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="text-sm block mb-1 font-medium">
            Email address
          </label>
          <div className="flex items-center bg-[#232825] rounded-lg px-3 py-2 focus-within:ring-2 ring-green-400 transition">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium">Password</label>
            <a href="#" className="text-green-400 text-xs hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center bg-[#232825] rounded-lg px-3 py-2 focus-within:ring-2 ring-green-400 transition">
            <FiLock className="text-gray-400 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent outline-none w-full text-white placeholder-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="ml-2 text-gray-400 hover:text-green-400 focus:outline-none"
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#53D22C] text-black font-bold py-2 rounded-full hover:from-[#32e93a] hover:to-[#40ff47] transition"
        >
          Log in
        </button>
      </form>

      <p className="text-center text-sm text-gray-400 mt-8">
        Don’t have an account?{" "}
        <a href="#" className="text-green-400 hover:underline font-medium">
          Sign up
        </a>
      </p>
    </div>
  );
}
