import React from "react";

export default function Features() {
  const cards = [
    {
      badge: "A.I Powered",
      title: "AI-Powered Personalized Outreach",
      description: "Craft tailored email campaigns to reach out the lead with personalized insights.",
      features: ["Impactful", "Time-Saving"],
      image: "/images/Image1.png",
    },
    {
      badge: "Management",
      title: "Centralized Leads Management",
      description: "Organize and track all lead activities in one platform for efficient sales workflows.",
      features: ["Lead Segmentation", "Activity Tracking"],
      image: "/images/Image2.png",
    },
    {
      badge: "Security",
      title: "Role Based Access Control",
      description: "Secure your data with customizable permissions for Admins, Managers, and Sales Reps.",
      features: ["Permission Settings", "User Role Management"],
      image: "/images/Image3.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-[77px]">
      {cards.map((card, index) => {
        const isEven = index % 2 === 1;

        return (
            <div
            key={index}
            className={`w-full flex flex-col max-[950px]:flex-col ${
                isEven ? "flex-row-reverse" : "flex-row"
            } items-center justify-center gap-[40px]`}
            >
            <LeftSide
                badge={card.badge}
                title={card.title}
                description={card.description}
                features={card.features}
            />

            <RightSide image={card.image} />
            </div>
        );
        })}
    </div>
  );
}

// Left Section Component
function LeftSide({ badge, title, description, features }) {
  return (
    <div className="
        flex flex-col items-start gap-[30px] w-full max-w-[547px] 
        px-6 sm:px-8 
        min-[350px]:pl-10 max-[940px]:pl-10">
      {/* Badge */}
      <div className="flex px-[14px] py-[4px] justify-center items-center gap-[10px] rounded-full bg-gradient-to-br from-[#1E1749] to-[#7B6CBC]">
        <p className="text-white text-center font-inter font-semibold text-[14px] leading-[22px]">
          {badge}
        </p>
      </div>

      {/* Title */}
      <h2 className="text-[#282828] font-inter text-[36px] md:text-[52px] font-semibold leading-[44px] md:leading-[63px] tracking-[-1.5px]">
        {title}
      </h2>

      {/* Description */}
      <p className="text-[#5F6980] font-inter text-[16px] md:text-[18px] font-normal leading-[26px] md:leading-[30px]">
        {description}
      </p>

      {/* Feature Points */}
      <div className="flex flex-row flex-wrap gap-x-[24px] gap-y-[16px]">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
              <path d="M3.23926 6.49992L5.90592 9.16658L11.2393 3.83325" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-[#282828] font-inter text-[16px] font-normal leading-[26px]">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Right Section Component
function RightSide({ image }) {
  return (
   <div className="w-full max-w-[500px] aspect-square px-2 md:px-6 bg-[#FAFAFA] rounded-[24px] flex justify-center items-center overflow-hidden">
      <img
        src={image}
        alt="Feature Visual"
        className="w-full aspect-square object-cover rounded-[12px]"
      />
    </div>
  );
}

