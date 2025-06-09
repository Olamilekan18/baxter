"use client";
import { useState } from "react";
import EmailInput from "./emailInput";
import UsernameInput from "./usernameInput";
import PasswordInput from "./passwordInput";
export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form className="space-y-4">
      <EmailInput email={email} setEmail={setEmail} />
      <UsernameInput username={username} setUsername={setUsername} />
      <PasswordInput
        password={password}
        showPassword={showPassword}
        setPassword={setPassword}
        setShowPassword={setShowPassword}
      />

      <input
        value="Sign up"
        type="submit"
        className="w-full bg-[#40ff47] text-black font-semibold py-2 rounded-full hover:bg-[#32e93a] transition"
      />
    </form>
  );
}
