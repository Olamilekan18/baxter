'use client';

import { useState } from 'react';
import svg from '@/design_assets/SVG.png';
import Image from 'next/image';
import { FiMail, FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import Link from 'next/link';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-[#1A1F19] rounded-2xl shadow-xl w-full max-w-md mt-20 mb-20 p-8">
      <div className="flex justify-center mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-xl">
          <Image src={svg} alt="Baxter" />
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        Create your Baxter account
      </h2>
      <p className="text-gray-400 text-center mb-6">
        Start your journey to financial literacy today.
      </p>

      <form className="space-y-4">
        <div>
          <label className="text-sm block mb-1">Email address</label>
          <div className="flex items-center bg-[#232825] rounded-md px-3 py-2 focus-within:ring-2 ring-green-400 transition">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-transparent outline-none w-full text-white placeholder-gray-500 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

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
              type={showPassword ? 'text' : 'password'}
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
              aria-label={showPassword ? 'Hide password' : 'Show password'}
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

      <p className="text-center text-xs text-gray-200 mt-4">
        By signing up, you agree to our{' '}
        <Link href="/termsandcondition" className="text-green-500 underline">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="text-green-500 underline">
          Privacy Policy
        </Link>
        .
      </p>
      <p className="text-center text-sm text-gray-200 mt-3">
        Already have an account?{' '}
        <Link href="/login" className="text-green-500 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
