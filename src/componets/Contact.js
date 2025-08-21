import React from "react";

export default function Contact() {
  return (
    <div
      className="
        flex flex-col items-center gap-4 
        px-4 sm:px-6 md:px-8 py-8
        w-full
      "
    >
      {/* Contact Tag */}
      <div className="flex items-center justify-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#D4D4D4]">
        <span className="text-[#525252] text-xs sm:text-sm font-normal leading-5 font-inter">
          Contact
        </span>
      </div>

      {/* Heading */}
      <h2
        className="
          self-stretch text-center text-[#1D201F] 
          text-xl sm:text-2xl md:text-[30px]
          font-semibold leading-[1.4] font-inter
        "
      >
        Join the Waitlist
      </h2>

      {/* Contact Form */}
      <div
        className="
          flex flex-col items-start gap-3 sm:gap-4
          p-4 sm:p-6
          w-full max-w-md
          rounded-lg border border-[#D4D4D4] bg-white
          shadow-[0_1px_3px_0_rgba(0,0,0,0.10),_0_1px_2px_0_rgba(0,0,0,0.06)]
        "
      >
        {/* Name Label */}
        <label className="text-[#171717] text-sm sm:text-base font-medium leading-5 font-inter">
          Name
        </label>

        {/* Name Input */}
        <div className="flex items-center w-full h-10 px-3 py-2 rounded-md border border-[#D4D4D4] bg-white">
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 text-[#737373] text-sm font-normal leading-5 font-inter outline-none bg-transparent"
          />
        </div>

        {/* Email Label */}
        <label className="text-[#171717] text-sm sm:text-base font-medium leading-5 font-inter mt-1.5 sm:mt-2">
          Email
        </label>

        {/* Email Input */}
        <div className="flex items-center w-full h-10 px-3 py-2 rounded-md border border-[#D4D4D4] bg-white">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 text-[#737373] text-sm font-normal leading-5 font-inter outline-none bg-transparent"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            flex justify-center items-center
            w-full mt-4 py-2.5 sm:py-3 px-4
            rounded-full
            bg-gradient-to-tr from-[#7B6CBC] to-[#1E1749]
          "
        >
          <span className="text-white text-sm sm:text-base font-medium leading-5 font-inter text-center">
            Submit
          </span>
        </button>
      </div>
    </div>
  );
}
