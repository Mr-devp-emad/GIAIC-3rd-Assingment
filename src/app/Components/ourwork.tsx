'use client'

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Inter } from "next/font/google";
import Logo1 from '@/app/Assets/Logo1.png'
import Image from 'next/image';
// Load the Inter font with specified weights
const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Ourwork = () => {
  return (
    <>
      <div className="w-[1920px] h-[661px] py-[100px] px-[220px] bg-[#f4f7fb] flex justify-center">
        <div className="w-[1480px] h-[661px] flex items-center justify-between">
          {/* Text Content */}
          <div className={`w-[500px] flex flex-col gap-6 ${inter.className}`}>
            <h1 className="font-bold text-[48px] leading-[60px] text-[#333]">
              Work together
            </h1>
            <p className="text-lg leading-[30px] text-[#666]">
              With Whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
            </p>
            <button className="w-[200px] h-[63px] rounded-lg py-5 px-10 flex items-center justify-center gap-2 bg-[#4F9CF9] hover:bg-[#3a8ce1]">
              <span className="font-medium text-lg leading-[23px] text-white">
                Try it now
              </span>
              <FaArrowRight className="text-white" />
            </button>
          </div>

          {/* Orbiting Visual Content */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            {/* Center Icon */}
            <div className="w-[60px] h-[60px] bg-[#d9d9d9] rounded-full flex items-center justify-center">
              {/* Placeholder for center icon */}
              <Image src={Logo1} alt='logo' height={100} width={100} />
            </div>

            {/* Orbiting Dots */}
            <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[20px] h-[20px] bg-[#ff4d4d] rounded-full"></div>
            <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[20px] h-[20px] bg-[#4d94ff] rounded-full"></div>
            <div className="absolute top-1/2 right-[20px] transform -translate-y-1/2 w-[20px] h-[20px] bg-[#ffcc4d] rounded-full"></div>
            <div className="absolute top-1/2 left-[20px] transform -translate-y-1/2 w-[20px] h-[20px] bg-[#4dff88] rounded-full"></div>
            {/* Add more orbiting dots here if needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourwork;
