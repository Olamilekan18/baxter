"use client";
import { useState } from "react";
// import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import EmailInput from "./emailInput";
// import Link from "next/link";
import PasswordInput from "./passwordInput";
export default function FormSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="space-y-6">
      <EmailInput inputedEmail={email} setEmail={setEmail} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {/* <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm font-medium">Password</label>
          <Link href="#" className="text-green-400 text-xs hover:underline">
            Forgot password?
          </Link>
        </div>
        <div className="flex items-center bg-[#232825] rounded-lg px-3 py-2 focus-within:ring-2 ring-green-400 transition">
          <FiLock className="text-gray-400 mr-2" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
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
      </div> */}

      <button
        type="submit"
        className="w-full bg-[#53D22C] text-black font-bold py-2 rounded-full hover:from-[#32e93a] hover:to-[#40ff47] transition"
      >
        Log in
      </button>
    </form>
  );
}
