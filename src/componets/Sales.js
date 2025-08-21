import React from "react";

export default function Sales() {
  const cards = [
  {
    title: "Personalization is a key",
    description: "Don’t let the generic emails ruin a well planned sales ramp.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M19.9997 25.4168C22.9912 25.4168 25.4163 22.9917 25.4163 20.0002C25.4163 17.0086 22.9912 14.5835 19.9997 14.5835C17.0081 14.5835 14.583 17.0086 14.583 20.0002C14.583 22.9917 17.0081 25.4168 19.9997 25.4168Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.0003 32.0832C13.3269 32.0832 7.91699 26.6733 7.91699 19.9998C7.91699 13.3264 13.3269 7.9165 20.0003 7.9165C31.3545 7.9165 32.0837 15.2082 32.0837 19.9998V22.0832C32.0837 23.9242 30.5913 25.4165 28.7503 25.4165C26.9093 25.4165 25.417 23.9242 25.417 22.0832V14.5832" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Fastes Finger First",
    description: "Say ‘NO’ to the ugly and unproductive work and go close the deals faster.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10.667 11.3335C10.667 12.4381 9.77155 13.3335 8.66699 13.3335C7.56243 13.3335 6.66699 12.4381 6.66699 11.3335C6.66699 10.2289 7.56243 9.3335 8.66699 9.3335C9.77155 9.3335 10.667 10.2289 10.667 11.3335Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.667 20.6665C10.667 21.7709 9.77155 22.6665 8.66699 22.6665C7.56243 22.6665 6.66699 21.7709 6.66699 20.6665C6.66699 19.5621 7.56243 18.6665 8.66699 18.6665C9.77155 18.6665 10.667 19.5621 10.667 20.6665Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.333 11.3335H25.6663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.333 20.6665H25.6663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Target Practice? ",
    description: "Pipeline so smooth, makes closing deals fun. Achieve targets like never before!",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6.33301 16.0002C6.33301 10.6614 10.6609 6.3335 15.9997 6.3335C21.3385 6.3335 25.6663 10.6614 25.6663 16.0002C25.6663 21.339 21.3385 25.6668 15.9997 25.6668C10.6609 25.6668 6.33301 21.339 6.33301 16.0002Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16.1269L14.4828 18.6666L20 13.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  ];


  return (
    <div className="flex flex-col justify-center items-center gap-2 py-[80px] bg-gradient-to-r from-[#1E1749] to-[#7B6CBC] w-full">
      {/* Top Text */}
      <p className="self-stretch text-center text-white font-inter font-semibold text-[16px] leading-[26px]">
        Best time here
      </p>

      {/* Heading */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[60px]">
        <h2 className="text-center text-white font-inter font-semibold text-[54px] leading-[63px] tracking-[-1.5px] mb-[40px]">
          Better sales at the right time.
        </h2>
      </div>


      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-[60px]">
      {/* Card Container */}
        <div className="flex justify-center items-center w-full max-w-[1150px] mx-auto pb-[91px] rounded-[24px] border border-black/5 bg-[#111]">
          {/* Card Inner */}
           <div className="w-full max-w-[1068px] h-[307px] flex justify-between flex-wrap sm:flex-nowrap items-start rounded-[20px] border-r border-b border-l border-black/5 bg-[#222] shadow-sm p-6 relative">
            {/* Top-Left Content */}
            <div className="flex items-center gap-4 h-[67px] max-[600px]:h-auto max-[600px]:gap-2">
            {/* Logo */}
            <div
              className="w-[68px] h-[67px] max-[600px]:w-[50px] max-[600px]:h-[50px] bg-[url('/images/Logo.png')] bg-no-repeat bg-cover bg-center"
              style={{ backgroundPosition: '50% -10%' }}
            />

              {/* Title + Time */}
              <div className="flex flex-col justify-start">
              <div className="w-[175px] h-[26px] max-[600px]:w-auto max-[600px]:h-auto flex items-center">
                <p className="text-white font-inter text-[21.857px] max-[600px]:text-[16px] font-medium leading-[34px] max-[600px]:leading-[24px] mb-[8.5px]">
                  vConnect iDees
                </p>
              </div>
              <div className="w-[216px] h-[23px] max-[600px]:w-auto max-[600px]:h-auto flex items-center">
                <p className="text-[#737373] font-inter text-[19.429px] max-[600px]:text-[14px] font-normal leading-[29.143px] max-[600px]:leading-[22px]">
                  2m ago in Company
                </p>
              </div>
            </div>
          </div>

            {/* Top-Right Badge */}
            <div className="w-[157px] h-[48px] max-[600px]:w-[110px] max-[600px]:h-[38px] px-[13px] py-[10px] max-[600px]:px-[8px] max-[600px]:py-[6px] flex justify-center items-center rounded-[41.71px] bg-gradient-to-br from-[#FF591E] to-[#4062BB] mt-4 sm:mt-0">
              <div className="w-[112px] h-[21px] max-[600px]:w-auto max-[600px]:h-auto flex justify-center items-center">
                <p className="text-white text-center font-[510] text-[18.215px] max-[600px]:text-[13px] leading-[27.346px] max-[600px]:leading-[18px] font-[SF Pro]">
                  Deal Closed
                </p>
              </div>
            </div>

            {/* Bottom-Left Avatars */}
            <div className="absolute bottom-6 left-6 flex">
              <div className="w-[48px] h-[48px] rounded-full border-2 border-white bg-[url('/images/Avatar1.png')] bg-cover bg-center z-30"></div>
              <div className="w-[48px] h-[48px] rounded-full border-2 border-white bg-[url('/images/Avatar2.png')] bg-cover bg-center -ml-4 z-20"></div>
              <div className="w-[48px] h-[48px] rounded-full border-2 border-white bg-[url('/images/Avatar3.png')] bg-cover bg-center -ml-4 z-10"></div>
            </div>

            {/* Bottom-Right Arrow */}
            <div className="absolute bottom-6 right-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                  d="M14.168 11.3335L20.366 17.0888L14.168 22.8441"
                  stroke="white"
                  strokeWidth="2.12503"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Three-Frame Section */}
     <div className="flex flex-wrap justify-center lg:justify-between gap-4 mt-[40px] w-full max-w-[1200px] px-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="basis-full lg:basis-[32%] h-[173px] flex flex-col justify-start gap-3 p-6 rounded-[24px] border border-black/5 bg-[#111] flex-shrink-0"
        >
          {/* SVG Container */}
          <div className="w-[40px] h-[40px] flex items-center justify-center">
            {card.svg}
          </div>

          {/* Title */}
          <div className="inline-flex items-center">
            <p className="text-white font-inter text-[16px] font-semibold leading-[24px]">
              {card.title}
            </p>
          </div>

          {/* Description */}
          <div className="flex h-[43px] flex-col justify-center">
            <p className="text-[#737373] font-inter text-[16px] font-normal leading-[24px]">
              {card.description}
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
