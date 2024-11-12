'use client'

import React from "react";
import Section from "./section";
import { FaArrowRight } from 'react-icons/fa';
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Extension = () => {
  return (
    <>
      {/* Use the reusable Section component */}
      <Section
        mainContainerWidth="w-[1920px]"
        mainContainerHeight="h-[759px]"
        paddingX="px-[220px]"
        paddingY="py-[140px]"
        backgroundColor="bg-[#043873]"
        containerWidth="w-[697px]"
        containerHeight="h-[380px]"
        title="Use as Extension"
        description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        buttonText="Let’s Go"
        innerContainerWidth="w-[686px]"
        innerContainerHight="h-[497px]"
        hcolor="text-white"
        pcolor="text-white"
      />
    </>
  );
};

export default Extension;
