import React from "react";

export default function NewSales({ openModal }) {
  return (
    <div
      className="
        flex flex-col justify-center items-center gap-8
        px-5 sm:px-10 md:px-20 pt-20
        bg-gradient-to-br from-[#1E1749] via-[#3B2E7C] to-[#7B6CBC]
      "
    >
      {/* Inner Container */}
      <div className="flex flex-col items-center gap-3 w-full max-w-[941px]">
        {/* Heading */}
        <div
          className="
            text-center text-white font-inter font-semibold
            text-[32px] leading-[40px] tracking-[-1px]
            sm:text-[42px] sm:leading-[50px] sm:tracking-[-1.5px]
            md:text-[52px] md:leading-[60px] md:tracking-[-2px]
            lg:text-[63px] lg:leading-[73px] lg:tracking-[-2.5px]
            w-full max-w-[779px] mb-3
          "
        >
          This is Sales Reimagined!
        </div>

        {/* Body */}
        <div
          className="
            text-center text-white font-inter font-normal
            text-[16px] leading-[28px]
            sm:text-[18px] sm:leading-[30px]
            md:text-[20px] md:leading-[35px]
            w-full max-w-[485px] mb-3
          "
        >
          Stop focusing on the clutter & start closing more deals.
        </div>

        {/* Button */}
        <button
          onClick={openModal}
          className="
            flex justify-center items-center gap-2
            px-6 py-2.5 sm:px-7 sm:py-3
            bg-white text-[#282828] font-inter font-semibold
            text-[14px] leading-[24px] tracking-[-0.1px]
            sm:text-[16px] sm:leading-[28px] sm:tracking-[-0.2px]
            rounded-[39px]
          "
        >
          Join the Waitlist
        </button>
      </div>

      {/* Image */}
      <img
        src="/images/frame4.png"
        alt="Sales Graphic"
        className="
            w-full
            max-w-[calc(100%-40px)] sm:max-w-[calc(100%-100px)] md:max-w-[calc(100%-432px)]
            object-contain
            mx-auto
        "
        />
    </div>
  );
}
