`use client`
import React from 'react';
import Image from 'next/image';
import logo from '../Assets/Logo.png'; // Make sure the path is correct

import { DM_Sans } from 'next/font/google';
import { Inter } from 'next/font/google';

// Load DM Sans and Inter fonts
const Dmsans = DM_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  weight: ['500'],
  subsets: ['latin'],
});

const Navbar = () => {
  return (
    <div className="w-full max-w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
      
      {/* Logo Image */}
      <Image src={logo} alt="Company logo" width={191} height={34} className="object-contain" />
      
      <div className="flex w-auto h-[60px] gap-[60px] justify-between items-center">
        
        {/* Navigation Links */}
        <ul className={`flex list-none ${Dmsans.className} text-white gap-[32px] text-lg font-medium items-center`}>
          <li className="hover:text-[#FFE492] cursor-pointer hover:underline">Products</li>
          <li className="hover:text-[#FFE492] cursor-pointer hover:underline">Solutions</li>
          <li className="hover:text-[#FFE492] cursor-pointer hover:underline">Resources</li>
          <li className="hover:text-[#FFE492] cursor-pointer hover:underline">Pricing</li>
        </ul>
        
        {/* Login Button */}
        <button className={`w-[126px] h-[60px] rounded-lg py-4 px-10 bg-[#FFE492] hover:bg-[#ffd865] flex items-center justify-center ${inter.className}`}>
          <p className="font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#043873]">Login</p>
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
