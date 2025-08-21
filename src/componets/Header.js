import React from 'react';

export default function Header({ openModal }) {
  return (
    <header
      className="
        flex flex-wrap justify-between items-center
        w-full
        px-4 sm:px-6 md:px-8 py-4
        bg-white max-w-[1200px] mx-auto
      "
    >
      {/* Logo */}
      <img
        src="/images/Zigtex.png"
        alt="Zigtex Logo"
        className="
          object-contain
          w-[90px] h-[25px]
          sm:w-[120px] sm:h-[35px]
          md:w-[150px] md:h-[45px]
          flex-shrink-0
        "
      />

      {/* Waitlist Button */}
      <button
        onClick={openModal}
        className="
          mt-2 sm:mt-0
          px-4 py-2
          sm:px-5 sm:py-2.5
          rounded-full
          bg-gradient-to-b from-[#1E1749] to-[#7B6CBC]
          text-white text-sm sm:text-base font-semibold leading-6
          outline-none border-none
          flex-shrink
        "
      >
        Join The Waitlist
      </button>
    </header>
  );
}
