'use client'
import React from "react"
import { FaArrowRight } from 'react-icons/fa'
import { Inter } from "next/font/google"

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Customise = () => {
  return (
    <>
      <div className='w-[1920px] h-[812.09px] py-[140px] px-[220px] flex flex-row-reverse items-center gap-[98px] bg-[#FFFFFF]'>
        <div className={`w-[669px] h-[411px] ${inter.className} flex flex-col gap-[60px]`}>
          <div className='w-[669px] h-[288px] gap-[24px]'>
            <h2 className='w-[669px] h-[174px] text-[72px] font-bold leading-[87.14px] tracking-[-2%] text-left text-[#212529]'>Customise it to your needs</h2>
            <p className='w-[669px] pt-6 h-[90px] text-lg font-normal leading-[30px] tracking-[-2%] text-left text-[#212529]'>
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
          </div>

          <button className='w-[180px] h-[63px] p-5 gap-[10px] py-[20px] px-[40px] rounded-lg bg-[#4F9CF9] hover:bg-[#4F9CF9]'>
            <p className='flex items-center gap-2 text-lg font-medium leading-[23px] tracking-[-2%] text-left text-white'>let &apos;s Go <FaArrowRight /></p>
          </button>
        </div>
        <div className='w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]'></div>
      </div>
    </>
  )
}

export default Customise
