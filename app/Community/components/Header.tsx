// components/Layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/">
          <span className="text-2xl font-bold flex items-center">
            <span className="bg-accent p-2 rounded-lg mr-2">🤖</span>
            Baxter
          </span>
        </a>
        
        <nav className="hidden md:flex space-x-6">
          <button><a className="hover:text-accent transition-colors">Trade</a></button>
          <button ><a className="font-bold text-accent">Community</a></button>
          <button ><a className="hover:text-accent transition-colors">Learn</a></button>
          <button ><a className="hover:text-accent transition-colors">About</a></button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="bg-accent hover:bg-white hover:text-primary text-white py-2 px-4 rounded-lg transition-colors">
            Sign In
          </button>
          <button className="hidden md:block bg-white text-primary hover:bg-gray-100 py-2 px-4 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}