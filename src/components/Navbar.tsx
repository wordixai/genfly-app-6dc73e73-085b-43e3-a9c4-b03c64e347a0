"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Culinary<span className="text-amber-500">Corner</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-amber-500 transition-colors">
              Home
            </Link>
            <Link href="/recipes" className="hover:text-amber-500 transition-colors">
              Recipes
            </Link>
            <Link href="/tips" className="hover:text-amber-500 transition-colors">
              Cooking Tips
            </Link>
            <Link href="/about" className="hover:text-amber-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-amber-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Search Icon */}
          <div className="hidden md:flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="py-2 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/recipes" 
              className="py-2 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link 
              href="/tips" 
              className="py-2 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cooking Tips
            </Link>
            <Link 
              href="/about" 
              className="py-2 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="py-2 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 border-t">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full py-2 pl-10 pr-4 border rounded-lg"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}