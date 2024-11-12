'use client'
import React from 'react';
import logo from '../Assets/Logo.png';
import Image from 'next/image';
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <div className='w-[1920px] h-[461px] py-[140px] px-[220px] gap-[200px] bg-[#043873]'>
        <div className={`w-[1480px] h-[289px] gap-[100px] ${inter.className} flex flex-col`}>
          <div className='w-[1480px] h-[169px] gap-[100px] flex'>
            
            {/* Logo and Description */}
            <div className='w-[295px] h-[169px] gap-[15px]'>
              <div className='w-[191px] h-[34px] flex items-center'>
                <Image src={logo} alt='logo' width={191} height={34} />
              </div>
              <p className='w-[240px] h-[120px] text-lg font-normal leading-[30px] tracking-[-2%] text-left text-white'>
                whitepace was created for the new ways we live and work. We make a better workspace around the world.
              </p>
            </div>

            {/* Product Links */}
            <div className='w-[295px] h-[127px] flex flex-col gap-[15px]'>
              <p className='text-lg font-bold leading-[21.78px] tracking-[-2%] text-left text-white'>Product</p>
              <p className='text-base font-normal leading-[20px] tracking-[-2%] text-left text-white'>Overview</p>
              <p className='text-base font-normal leading-[20px] tracking-[-2%] text-left text-white'>Pricing</p>
              <p className='text-base font-normal leading-[20px] tracking-[-2%] text-left text-white'>Customer stories</p>
            </div>

            {/* Resources Links */}
            <div className='w-[295px] h-[130px] flex flex-col gap-[16px]'>
              <p className='text-lg font-bold leading-[21.78px] tracking-[-2%] text-left text-white'>Resources</p>
              <p className='text-base font-normal leading-[20px] tracking-[-2%] text-left text-white'>Blog</p>
              <p className='text-base font-normal leading-[20px] tracking-[-2%] text-left text-white'>Guides & tutorials</p>
              <p className='text-base font-normal leading-[20px] tracking-[-2%] text-left text-white'>Help center</p>
            </div>
            
            {/* Company Links */}
            <div className='w-[295px] h-[130px] flex flex-col gap-[16px]'>
              <p className='text-lg font-bold leading-[21.78px] tracking-[-2%] text-left text-white'>Company</p>
              <p className='text-base font-normal leading-[20px] tracking-[-2%] text-left text-white'>About us</p>
              <p className='text-base font-normal leading-[20px] tracking-[-2%] text-left text-white'>Careers</p>
              <p className='text-base font-normal leading-[20px] tracking-[-2%] text-left text-white'>Media kit</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className='w-[1480px] h-[20px] flex justify-center'>
            <p className='text-base font-normal leading-[20px] tracking-[-2%] text-white'>
              ©2021 Whitepace LLC.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
