"use client";
import Link from "next/link";
import { useState } from "react";

export default function HomeNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#0d0f0e] text-white px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          <span className="font-semibold sm:text-lg text-3xl ml-1">Baxter</span>
          {/* Adjust ml to control spacing */}
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-sm text-white">
          {[
            { route: "Home", path: "/" },
            { route: "Learn", path: "/learn" },
            { route: "News", path: "/news" },
            { route: "Community", path: "/community" },
          ].map(({ route, path }) => (
            <li key={route}>
              <Link href={path} className="hover:text-white transition">
                {route}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search + Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search stocks, news..."
              className="bg-[#1a1c1b] text-sm text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0z" />
            </svg>
          </div>

          <button className="bg-green-500 text-black font-semibold px-8 py-2 rounded-full hover:bg-green-600 transition">
            Sign Up
          </button>
          <button className="bg-[#2c2e2d] text-white font-semibold px-8 py-2 rounded-full hover:bg-[#3a3c3b] transition">
            Log In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden h-20">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white"
          >
            <div className="md:hidden flex items-center h-20">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white"
              >
                {mobileOpen ? (
                  // Close icon
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 space-y-4  text-gray-300">
          {["Home", "Learn", "News", "Community"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-4 py-2 hover:text-white transition"
            >
              {item}
            </a>
          ))}

          <div className="px-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#1a1c1b] text-white placeholder-gray-400 px-4 py-2 rounded-full mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex gap-2">
              <button className="w-1/2 bg-green-500 text-black py-2 rounded-full font-semibold hover:bg-green-600 transition">
                Sign Up
              </button>
              <button className="w-1/2 bg-[#2c2e2d] text-white py-2 rounded-full font-semibold hover:bg-[#3a3c3b] transition">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
