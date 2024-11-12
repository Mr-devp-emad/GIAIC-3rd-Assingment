// src/app/Components/YourWork.tsx
import React from 'react';

const YourWork = () => {
  return (
    <div className="bg-[#043873] py-10 flex justify-center w-[1920px] ">
      <div className="text-center max-w-[1481px] px-4">
        <h2 className="text-white text-3xl font-bold mb-4">
          Your work, everywhere you are
        </h2>
        <p className="text-white text-base mb-6 max-w-[800px] mx-auto">
          Access your notes from your computer, phone, or tablet by synchronizing with various services, including whitespace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
        </p>
        <button className="mt-4 bg-[#1D4ED8] text-white py-3 px-6 rounded-md hover:bg-[#2563EB] transition duration-300 ease-in-out">
          Try Taskey
        </button>
      </div>
    </div>
  );
};

export default YourWork;
