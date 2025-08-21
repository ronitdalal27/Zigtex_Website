import React from "react";

export default function About() {
  return (
    <div className="w-full flex justify-center items-center px-4 sm:px-8 md:px-12 py-20 bg-transparent">
      {/* Card */}
      <div
        className="w-full max-w-[1200px] 
                   rounded-[6px] 
                   bg-gradient-to-r from-[#1A124C] via-[#32258D] to-[#8676D3]
                   backdrop-blur-[10px] 
                   shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] 
                   flex flex-col items-center p-6 sm:p-10 md:p-16 gap-6"
      >
        {/* Heading */}
        <h1
          className="text-white text-center 
                      font-inter text-[32px] sm:text-[40px] md:text-[52px] font-semibold leading-tight w-full"
        >
          About Us
        </h1>

        {/* Paragraph */}
        <p
          className="text-center font-inter text-[14px] sm:text-[16px] leading-[24px] w-full max-w-[1024px]"
        >
          <span className="text-white font-bold">
            ZigTex is a next-generation sales CRM{" "}
          </span>
          <span className="text-gray-300 font-normal">
            designed to streamline sales execution and maximize retention. 
            Purpose-built to eliminate repetitive, time-consuming tasks, ZigTex empowers sales teams to focus on{" "}
          </span>
          <span className="text-white font-bold">
            what truly matters - closing more deals.
          </span>
          <br />
          <br />
          <span className="text-white font-bold">
            Developed by vConnect iDees,{" "}
          </span>
          <span className="text-gray-300 font-normal">
            a leading lead generation and appointment-setting agency, ZigTex is engineered to boost operational 
            efficiency and business scalability, all while minimizing distractions.{" "}
          </span>
          <span className="text-white font-bold">
            It’s not just a CRM, it’s your intelligent sales partner.
          </span>
        </p>

        {/* Button + Icon Row */}
        <div
          className="min-w-[40px] min-h-[40px] px-4 py-2 
                     flex justify-center items-center gap-2 
                     rounded-[6px] bg-white 
                     shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] mt-4"
        >
          <a
            href="https://vconnectidees.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-center font-inter text-sm font-medium leading-[20px] flex-1"
          >
            Learn More About Us
          </a>

          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8047 4.19526C12.0651 4.45561 12.0651 4.87772 11.8047 5.13807L5.13807 11.8047C4.87772 12.0651 4.45561 12.0651 4.19526 11.8047C3.93491 11.5444 3.93491 11.1223 4.19526 10.8619L10.8619 4.19526C11.1223 3.93491 11.5444 3.93491 11.8047 4.19526Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 4.66667C4 4.29848 4.29848 4 4.66667 4H11.3333C11.7015 4 12 4.29848 12 4.66667V11.3333C12 11.7015 11.7015 12 11.3333 12C10.9651 12 10.6667 11.7015 10.6667 11.3333V5.33333H4.66667C4.29848 5.33333 4 5.03486 4 4.66667Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
