'use client'
import React from "react";
import Section from "./section";
import { FaArrowRight } from 'react-icons/fa';
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      {/* Using Section component with custom props for styling */}
      <Section
        mainContainerWidth="w-[1920px]"
        mainContainerHeight="h-[829px]"
        paddingX="px-[220px]"
        paddingY="py-[140px]"
        backgroundColor="bg-[#043873]"
        containerWidth="w-[656px]"
        containerHeight="h-[380px]"
        title="Get More Done with whitepace"
        description="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
        buttonText="Try Whitepace free"
        innerContainerWidth="w-[824px]"
        innerContainerHight="h-[549px]"
        hcolor="text-white"
        pcolor="text-white"
      />
    </>
  );
};

export default Hero;
