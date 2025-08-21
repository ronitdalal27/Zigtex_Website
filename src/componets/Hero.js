import React from "react";

export default function Hero({ openModal }) {
  return (
    <div className="w-full flex flex-col items-center px-4 pt-10 bg-white relative overflow-hidden">
      {/* Heading */}
      <h1 className="max-w-[1192px] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[84px] font-semibold leading-[44px] sm:leading-[60px] md:leading-[72px] lg:leading-[89px] tracking-[-1.5px] sm:tracking-[-2px] md:tracking-[-3.5px] text-[#171717] text-center font-inter">
        Empower Your Sales Team with <br className="hidden md:block" />
        AI-Driven CRM
      </h1>

      {/* Subheading */}
      <p className="max-w-[800px] mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[35px] text-[#5F5F5F] text-center font-normal font-inter">
        Boost productivity and conversions with Zigtex
      </p>

      {/* Floating Email Box */}
      <div className="mt-6 sm:mt-8 z-20 w-[90%] max-w-[360px] bg-white rounded-lg shadow-lg backdrop-blur-[2px] p-2 flex items-center h-[44px] sm:h-auto max-[400px]:hidden">
        <input
          type="email"
          disabled={true}
          placeholder="Your email"
          className="flex-grow px-2 sm:px-3 py-1 sm:py-2 border-none outline-none bg-transparent placeholder-black text-black text-[12px] sm:text-sm font-inter"
        />
        <button
          onClick={openModal}
          className="px-3 py-1.5 sm:px-4 sm:py-2 ml-2 rounded-full bg-gradient-to-b from-[#1E1749] to-[#7B6CBC] text-white text-[12px] sm:text-sm font-medium"
        >
          Join The Waitlist
        </button>
      </div>

      {/* Combined Visual Image */}
      <div className="-mt-[180px] sm:-mt-[220px] md:-mt-[260px] lg:-mt-[300px] max-[1050px]:-mt-[140px] max-[900px]:-mt-[100px] max-[700px]:-mt-[60px] max-[500px]:-mt-[20px] max-[400px]:mt-0 w-full max-w-[1440px] px-4">
        <img
          src="/images/graphic.png"
          alt="Hero Visual Combined"
          className="w-full object-contain"
        />
      </div>

    </div>
  );
}
