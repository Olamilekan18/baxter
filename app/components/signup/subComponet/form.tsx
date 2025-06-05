"use client";
import { useState } from "react";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import EmailInput from "./emailInput";
export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="space-y-4">
      <EmailInput email={email} setEmail={setEmail} />

      <div>
        <label className="text-sm block mb-1">Username</label>
        <div className="flex items-center bg-[#232825] rounded-md px-3 py-2 focus-within:ring-2 ring-green-400 transition">
          <FiUser className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Choose a unique username"
            className="bg-transparent outline-none w-full text-white placeholder-gray-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm font-medium">Password</label>
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
            onClick={() => setShowPassword((showPassword) => !showPassword)}
            className="ml-2 text-gray-400 hover:text-green-400 focus:outline-none"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#40ff47] text-black font-semibold py-2 rounded-full hover:bg-[#32e93a] transition"
      >
        Sign up
      </button>
    </form>
  );
}
