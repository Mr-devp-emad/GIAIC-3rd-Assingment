'use client'
import React from 'react';
import { Inter } from "next/font/google";
import Image from 'next/image';

import apple from "../Assets/apple.png";
import microsoft from "../Assets/microsoft 1.png"; 
import slack from "../Assets/slack-logo.png";

import Google from "../Assets/Google.png"; 

// Load Inter font
const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Oursponsers = () => {
  return (
    <div className="w-[1920px] h-[538px] py-[140px] px-[220px] flex flex-col gap-[100px]">
      {/* Title */}
      <div className="w-[1482px] h-[87px]">
        <h1 className={`${inter.className} font-bold text-7xl leading-[87.14px] tracking-[-2%] text-center text-[#212529]`}>
          Our sponsors
        </h1>
      </div>

      {/* Sponsors Logos */}
      <div className="w-[1482px] h-[71px] flex justify-evenly items-center">
        <div>
          <Image src={apple} alt="Apple logo" width={100} height={50} />
        </div>
        <div>
          <Image src={microsoft} alt="Microsoft logo" width={100} height={50} />
        </div>
        <div>
          <Image src={slack} alt="Slack logo" width={100} height={50} />
        </div>
        <div>
          <Image src={Google} alt="Google logo" width={100} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Oursponsers;

// src/app/Components/OurSponsors.tsx
// import React from 'react';
// import Image from 'next/image';
// import apple from '../Assets/Apple.png';
// import microsoft from '../Assets/Microsoft.png';
// import slack from '../Assets/Slack.png';
// import google from '../Assets/Google.png';

// const OurSponsors = () => {
//   return (
//     <div className="bg-[#043873] py-10">
//       <h2 className="text-white text-center text-2xl font-bold mb-8">Our Sponsors</h2>
//       <div className="flex justify-center gap-10">
//         <Image src={apple} alt="Apple" width={120} height={40} />
//         <Image src={microsoft} alt="Microsoft" width={120} height={40} />
//         <Image src={slack} alt="Slack" width={120} height={40} />
//         <Image src={google} alt="Google" width={120} height={40} />
//       </div>
//     </div>
//   );
// };

// export default OurSponsors;

