'use client'; // This marks the file as a client component

import React, { useState } from 'react';

const FrameComponent = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="relative w-[1240px] h-[180px] mx-auto bg-black rounded-[20px] px-[64px] py-[36px] flex justify-between items-center gap-[153px]">
      
      {/* Stay Up-to-Date Section */}
      <div className="w-[551px] h-[94px] flex flex-none flex-col justify-center items-start text-white text-[40px] font-semibold leading-[45px] font-integralCF">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </div>

      {/* Email Input & Subscribe Section */}
      <div className="w-[349px] h-[108px] flex flex-col gap-[14px] items-start">
        
        {/* Email Input Frame */}
        <div className="flex items-start gap-[12px] w-[349px] h-[48px] bg-white rounded-[62px] px-[16px] py-[12px]">
          <input
            type="email"
            className="w-[173px] h-[22px] bg-transparent text-[16px] text-[#000000] font-satoshi font-normal leading-[22px] placeholder-opacity-40"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Subscribe Button */}
        <div className="flex justify-center items-center gap-[12px] w-[349px] h-[46px] bg-white rounded-[62px] px-[16px] py-[12px]">
          <button className="text-[16px] font-satoshi font-medium text-black">Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
