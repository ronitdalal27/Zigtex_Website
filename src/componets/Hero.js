import React, { useState } from 'react';

export default function Hero() {
  const [showOverlay, setShowOverlay] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("YOUR_SCRIPT_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const result = await response.text();
      alert("response Submitted successfully!", result);
      setShowOverlay(false);
      e.target.reset();
    } catch (err) {
      console.error("Submission failed", err);
      alert("Failed to submit. Try again later.");
    }
};

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
      <div className="mt-6 sm:mt-8 z-20 w-[90%] max-w-[350px] bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.3)] backdrop-blur-[2px] p-2 flex items-center h-[44px] sm:h-auto max-[600px]:hidden">
        <input
          type="email"
          disabled={true}
          placeholder="Your email"
          className="flex-grow px-2 sm:px-3 py-1 sm:py-2 border-none outline-none bg-transparent placeholder-black text-black text-[12px] sm:text-sm font-inter"
        />
        <button
          onClick={() => setShowOverlay(true)}
          className="px-3 py-1.5 sm:px-4 sm:py-2 ml-2 rounded-full bg-gradient-to-b from-[#1E1749] to-[#7B6CBC] text-white text-[12px] sm:text-sm font-medium"
        >
          Join The Waitlist
        </button>
      </div>

      {/* Visual Image */}
      <div
        className="
          mt-[-20px] 
          sm:mt-[-100px] 
          md:mt-[-150px] 
          lg:mt-[-276px] 
          xl:mt-[-400px]
          w-full max-w-[1440px] px-4
          [max-width:440px]:[min-width:300px]:w-[500%]
        "
      >
        <img
          src="/images/graphic.png"
          alt="Hero Visual Combined"
          className="w-full"
        />
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setShowOverlay(false)}
              className="absolute top-3 right-4 text-black text-2xl font-bold"
            >
              &times;
            </button>

            {/* Contact Tag */}
            <div className="flex items-center justify-center mb-4">
              <span className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#D4D4D4] text-[#525252] text-xs sm:text-sm font-normal font-inter">
                Contact
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-center text-[#1D201F] text-xl sm:text-2xl md:text-[30px] font-semibold leading-[1.4] font-inter mb-6">
              Join the Waitlist
            </h2>

            {/* Contact Form */}
            <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="text-[#171717] text-sm sm:text-base font-medium leading-5 font-inter">
                  Name
                </label>
                <div className="flex items-center w-full h-10 px-3 py-2 mt-1 rounded-md border border-[#D4D4D4] bg-white">
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="flex-1 text-[#737373] text-sm font-normal leading-5 font-inter outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-[#171717] text-sm sm:text-base font-medium leading-5 font-inter">
                  Email
                </label>
                <div className="flex items-center w-full h-10 px-3 py-2 mt-1 rounded-md border border-[#D4D4D4] bg-white">
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 text-[#737373] text-sm font-normal leading-5 font-inter outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  flex justify-center items-center
                  w-full mt-2 py-2.5 sm:py-3 px-4
                  rounded-full
                  bg-gradient-to-tr from-[#7B6CBC] to-[#1E1749]
                "
              >
                <span className="text-white text-sm sm:text-base font-medium leading-5 font-inter text-center">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
