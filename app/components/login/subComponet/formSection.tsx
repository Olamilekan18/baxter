"use client";
import { useState } from "react";
import EmailInput from "./emailInput";
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
      <input
        type="submit"
        value="Log In"
        className="w-full bg-[#53D22C] text-black font-bold py-2 rounded-full hover:from-[#32e93a] hover:to-[#40ff47] transition cursor-pointer"
      />
    </form>
  );
}
