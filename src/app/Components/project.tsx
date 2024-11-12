'use client'
import React from "react";
import Section from "./section";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";
import Image from "next/image";

// Load the Inter font
const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Project = () => {
  return (
    <>
      <div>
        {/* Section Component with Props */}
        <Section
          mainContainerWidth="w-[1920px]"
          mainContainerHeight="h-[700px]"
          paddingX="px-[220px]"
          paddingY="py-[140px]"
          backgroundColor="bg-[#FFFFFF]"
          containerWidth="w-[632px]"
          containerHeight="h-[411px]"
          title="Project Management"
          description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
          buttonText="Get Started"
          innerContainerWidth="w-[824px]"
          innerContainerHight="h-[549px]"
          hcolor="text-[#212529]"
          pcolor="text-[#212529]"
        />

        {/* Additional Content Section */}
        <div className="w-[1920px] h-[900px] py-[140px] px-[220px] flex flex-col gap-[100px] bg-[#FFFFFF]">
          <div
            className={`w-[1480px] h-[661px] flex items-center ${inter.className} flex flex-row-reverse gap-[100px]`}
          >
            {/* Text Content */}
            <div className="w-[670px] h-[294px] flex flex-col gap-[60px]">
              <div className="w-[670px] h-[171px] flex flex-col gap-6">
                <h1 className="w-[670px] h-[87px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] text-left text-[#212529]">
                  Work together
                </h1>
                <p className="w-[690px] pt-6 h-[60px] text-lg font-normal leading-[30px] tracking-[-2%] text-left text-[#212529]">
                  With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
                </p>
              </div>
              <div>
                <button className="w-[196px] h-[63px] py-[20px] px-[40px] flex items-center gap-[10px] rounded-md bg-[#4F9CF9] hover:bg-[#3a8ce1]">
                  <p className="flex items-center gap-2 text-lg font-medium leading-[23px] tracking-[-2%] text-left text-white">
                    Try it now <FaArrowRight />
                  </p>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-[710px] h-[661px]">
              {/* Using Next.js Image component for optimized loading */}
              <Image
                src="/Work_Together_Image.png" // Ensure this image is in the 'public' folder
                alt="Work Together"
                width={710}
                height={661}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
