'use client'
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Inter } from 'next/font/google';
import Logo from '../Assets/Logo.png'; 

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

// Props interface
interface SectionProps {
  mainContainerWidth?: string;
  mainContainerHeight?: string;
  paddingX?: string;
  paddingY?: string;
  backgroundColor?: string;
  containerWidth?: string;
  containerHeight?: string;
  title: string;
  description: string;
  buttonText: string;
  innerContainerWidth: string;
  innerContainerHight: string;
  hcolor?: string;
  pcolor?: string;
  style?: string;
}

const Section = ({
  mainContainerWidth = "",
  mainContainerHeight = "",
  paddingX = "",
  paddingY = "",
  backgroundColor = "",
  containerWidth = "",
  containerHeight = "",
  title = "",
  description = "",
  buttonText = "",
  innerContainerWidth = "",
  innerContainerHight = "",
  hcolor = "",
  pcolor = "",
  style = "",
}: SectionProps) => {
  return (
    <div
      className={`${mainContainerWidth} ${mainContainerHeight} ${paddingY} ${paddingX} ${style} flex items-center ${backgroundColor}`}
    >
      <div
        className={`${containerWidth} ${containerHeight} ${inter.className} flex flex-col gap-[60px] justify-center`}
      >
        <div className="flex flex-col gap-6">
          <h2 className={`text-[64px] font-bold leading-tight ${hcolor}`}>
            {title}
          </h2>
          <p className={`text-lg ${pcolor}`}>{description}</p>
        </div>

        <button className="flex items-center justify-center gap-2 w-[230px] h-[63px] mt-6 rounded-lg bg-[#4F9CF9] hover:bg-[#4F9CF9] text-lg font-medium text-white">
          {buttonText} <FaArrowRight />
        </button>
      </div>

      {/* Inner container with the image */}
      <div
        className={`${innerContainerWidth} ${innerContainerHight} gap-1 bg-[#C4DEFD] flex items-center justify-center`}
      >
        <img src={Logo.src} alt="Logo" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Section;
