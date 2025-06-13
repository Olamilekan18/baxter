"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FiBell, FiMenu, FiX } from "react-icons/fi";
import logo from "@/design_assets/SVG.png";
const url = [
  { label: "Home", path: "/stock" },
  { label: "Courses", path: "/Courses" },
  { label: "My Watchlist", path: "/stock/watchlist" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "News", path: "/news" },
  { label: "Markets", path: "/markets" },
  { label: "AI Chat", path: "/ai-chat" },
];
export default function StockHomeNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121712] text-white px-4 py-3 border-b border-[#2D372A]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Baxter" width={24} height={24} />
          <span className="text-lg font-semibold">Baxter</span>
        </Link>

        <div className="flex items-center space-x-5">
          <ul className="hidden md:flex space-x-6 text-sm">
            {[
              { label: "Home", path: "/stock/watchlist" },
              { label: "Courses", path: "/Courses" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "News", path: "/news" },
              { label: "Markets", path: "/markets" },
              { label: "AI Chat", path: "/ai-chat" },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link href={path} className="hover:text-green-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <FiBell className="w-5 h-5 text-gray-300" />

          <div className="w-8 h-8 rounded-full ring-2 ring-green-600 overflow-hidden">
            <Image
              src={logo}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            {mobileOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pb-3 space-y-4 text-sm text-gray-300">
          {url.map(({ label, path }) => (
            <Link
              key={label}
              href={path}
              className="block px-4 py-2 hover:text-white transition"
            >
              {label}
            </Link>
          ))}

          {/* <div className="px-4 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#2C352A] text-white placeholder-gray-400 px-4 py-2 pl-10 rounded-full focus:outline-none ring-white ring-1 focus:ring-2 focus:ring-green-500"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-7 top-2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0z" />
            </svg>
          </div> */}
        </div>
      )}
    </nav>
  );
}
