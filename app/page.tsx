"use client";
import React, { useEffect, useState } from "react";
import SimliAgent from "@/app/SimliAgent";
import DottedFace from "./Components/DottedFace";
import SimliHeaderLogo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Image from "next/image";

const Demo: React.FC = () => {
  const [showDottedFace, setShowDottedFace] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  const onClose = () => {
    console.log("Setting setshowDottedface to true...");
    setShowDottedFace(true);
  };

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
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-6 bg-effect15White p-6 pb-[40px] rounded-xl w-full">
        <div>
          {showDottedFace && <DottedFace />}
          <SimliAgent
            onStart={onStart}
            onClose={onClose}
          />
        </div>
      </div>

      <div className="max-w-[350px] font-thin flex flex-col items-center ">
        <span className="font-bold mb-[8px] leading-5 ">
          Welcome to my AI Avatar
        </span>
      </div>
    </div>
  );
};

export default Demo;
