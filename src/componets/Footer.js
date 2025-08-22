import React from 'react';

export default function Footer() {
  return (
    <div
      className="
         flex flex-col items-start gap-12
        w-full max-w-[1440px]
        px-4 sm:px-10 md:px-20 py-16
        bg-white
      "
    >
      {/* Top Row: Logo & LinkedIn Icon */}
      <div
        className="
          flex flex-row flex-nowrap justify-between items-center w-full min-w-0
        "
      >
        {/* Logo Placeholder */}
        <img
           src="/images/Zigtex.png"
           alt="ZigTex Logo"
           className="w-[150px] h-[45px] object-contain flex-shrink-0"
           style={{ aspectRatio: '10 / 3' }}
        />



        {/* LinkedIn Icon with Link */}
        <a
           href="https://www.linkedin.com/company/zigtex/posts/?feedView=all"
           target="_blank"
           rel="noopener noreferrer"
           className="w-5 h-5 flex-shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 8.00016C12.2283 8.00016 11.1685 8.43915 10.3871 9.22055C9.60565 10.002 9.16667 11.0618 9.16667 12.1668V17.1668H10.8333V12.1668C10.8333 11.5038 11.0967 10.8679 11.5656 10.3991C12.0344 9.93022 12.6703 9.66683 13.3333 9.66683C13.9964 9.66683 14.6323 9.93022 15.1011 10.3991C15.5699 10.8679 15.8333 11.5038 15.8333 12.1668V17.1668H17.5V12.1668C17.5 11.0618 17.061 10.002 16.2796 9.22055C15.4982 8.43915 14.4384 8.00016 13.3333 8.00016ZM9.20854 8.04204C10.3025 6.94808 11.7862 6.3335 13.3333 6.3335C14.8804 6.3335 16.3642 6.94808 17.4581 8.04204C18.5521 9.136 19.1667 10.6197 19.1667 12.1668V18.0002C19.1667 18.4604 18.7936 18.8335 18.3333 18.8335H15C14.5398 18.8335 14.1667 18.4604 14.1667 18.0002V12.1668C14.1667 11.9458 14.0789 11.7339 13.9226 11.5776C13.7663 11.4213 13.5543 11.3335 13.3333 11.3335C13.1123 11.3335 12.9004 11.4213 12.7441 11.5776C12.5878 11.7339 12.5 11.9458 12.5 12.1668V18.0002C12.5 18.4604 12.1269 18.8335 11.6667 18.8335H8.33333C7.8731 18.8335 7.5 18.4604 7.5 18.0002V12.1668C7.5 10.6197 8.11458 9.136 9.20854 8.04204Z" fill="#1D201F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0.833008 7.99984C0.833008 7.5396 1.2061 7.1665 1.66634 7.1665H4.99967C5.45991 7.1665 5.83301 7.5396 5.83301 7.99984V17.9998C5.83301 18.4601 5.45991 18.8332 4.99967 18.8332H1.66634C1.2061 18.8332 0.833008 18.4601 0.833008 17.9998V7.99984ZM2.49967 8.83317V17.1665H4.16634V8.83317H2.49967Z" fill="#1D201F"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.33301 3.00016C2.87277 3.00016 2.49967 3.37326 2.49967 3.8335C2.49967 4.29373 2.87277 4.66683 3.33301 4.66683C3.79325 4.66683 4.16634 4.29373 4.16634 3.8335C4.16634 3.37326 3.79325 3.00016 3.33301 3.00016ZM0.833008 3.8335C0.833008 2.45278 1.9523 1.3335 3.33301 1.3335C4.71372 1.3335 5.83301 2.45278 5.83301 3.8335C5.83301 5.21421 4.71372 6.3335 3.33301 6.3335C1.9523 6.3335 0.833008 5.21421 0.833008 3.8335Z" fill="#1D201F"/>
          </svg>
        </a>
      </div>

      {/* Divider Line */}
      <div
        className="
          flex flex-wrap gap-4 items-start w-full
          mt-3
        "
      >
        <div className="w-full max-w-[1280px] h-px bg-[#D4D4D4]" />
      </div>

      {/* Bottom Text */}
      <div
        className="
          flex flex-col justify-end items-start gap-4
          w-full max-w-[1280px] h-6
        "
      >
        <p className="
          w-full text-center text-[#1D201F] font-['Geist']
          text-[16px] font-normal leading-[24px]
        ">
          ZigTex © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
}
