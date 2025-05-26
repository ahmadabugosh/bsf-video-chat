"use client";
import React from "react";
import SimliHeaderLogo from "../Components/Logo";
import Navbar from "../Components/Navbar";
import { useState } from "react";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-abc-repro font-normal text-sm text-white p-8">
      <SimliHeaderLogo />
      <Navbar />
      
      {/* Hamburger Menu */}
      <div className="absolute top-[32px] right-[32px] z-50">
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-12 right-0 w-48 bg-gray-900 rounded-md shadow-lg py-2 z-50 border border-gray-700">
            <a
              onClick={() => {
                window.open("https://twitter.com/grantolfthegrey");
                setMenuOpen(false);
              }}
              className="block px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
            >
              X / Twitter
            </a>
            <a
              onClick={() => {
                window.open("https://web.telegram.org/a/#7743218430");
                setMenuOpen(false);
              }}
              className="block px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
            >
              Telegram
            </a>
            <a
              href="/"
              className="block px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
            >
              Home
            </a>
          </div>
        )}
      </div>
      
      {/* About Content */}
      <div className="flex flex-col items-center mt-20 max-w-[600px] text-center">
        <h1 className="text-3xl font-bold mb-8">About</h1>
        <div className="bg-effect15White p-8 rounded-xl">
          <p className="text-lg">This is a test project with BSF to learn about new AI features</p>
        </div>
      </div>
    </div>
  );
}
