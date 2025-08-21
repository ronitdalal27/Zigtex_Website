import React from "react";

export default function Business() {
  return (
    <div className="w-full flex justify-center px-0 sm:px-4">
      {/* Centered Content Container */}
      <div className="flex flex-col items-center w-full max-w-screen-xl px-4 sm:px-6 md:px-8">

        {/* Heading */}
        <h2 className="
          text-center 
          text-[#282828] font-inter 
          font-semibold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]
          leading-[36px] sm:leading-[44px] md:leading-[54px] lg:leading-[63px]
          tracking-[-1.5px]
          mt-[80px] mb-[40px]
        ">
          Designed for Sales Teams and Businesses
        </h2>

        {/* Cards Container */}
        <div className="
          flex flex-col min-[1000px]:flex-row justify-center items-center 
          gap-[32px] px-4 sm:px-6 md:px-8 min-[1000px]:px-[40px] mb-[80px] w-full
        ">
          <Card 
            title="Business Owners" 
            description="Organize, follow, and archive." 
            imgSrc="/images/Frame1.png" 
          />
          <Card 
            title="Sales Managers" 
            description="Track performance and collaborate efficiently." 
            imgSrc="/images/Frame2.png" 
          />
          <Card 
            title="Enterprise Teams" 
            description="Scale sales processes with automation." 
            imgSrc="/images/Frame3.png" 
          />
        </div>
      </div>
    </div>
  );
}

//card function
function Card({ title, description, imgSrc }) {
  return (
    <div className="
      relative
      w-full
      max-w-[320px] h-[420px]
      min-[400px]:max-w-[360px] min-[400px]:h-[440px]
      sm:max-w-[400px] sm:h-[460px]
      md:max-w-[440px] md:h-[480px]
      min-[1000px]:max-w-[320px] min-[1000px]:h-[420px]
      min-[1100px]:max-w-[340px] min-[1100px]:h-[430px]
      min-[1200px]:max-w-[370px] min-[1200px]:h-[440px]
      min-[1300px]:max-w-[408px] min-[1300px]:h-[398px]
      flex-shrink-0 
      rounded-[8px] border border-[rgba(0,0,0,0.05)] bg-[#FCFCFC]
      flex flex-col items-center justify-start 
      px-4 py-6
    ">
      {/* Title */}
      <div className="flex flex-col justify-center w-full max-w-[249px] mt-[16px] sm:mt-[20px] md:mt-[24px]">
        <p className="
          text-[#171717] text-center font-inter 
          text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]
          font-semibold 
          leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px]
        ">
          {title}
        </p>
      </div>

      {/* Description */}
      <p className="
        mt-1 text-[#525252] text-center font-inter 
        text-[14px] sm:text-[15px] md:text-[16px]
        leading-[20px] sm:leading-[22px] md:leading-[24px]
      ">
        {description}
      </p>

      {/* Image Box */}
        <div className="
        absolute right-0 bottom-0
        pl-[48px] pt-[200px] 
        w-full h-full 
        pointer-events-none
        ">
        <img
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover"
        />
        </div>

    </div>
  );
}


