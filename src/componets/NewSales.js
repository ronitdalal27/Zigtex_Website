import React, { useState } from "react";

export default function NewSales() {
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
    <div className="relative">
      {/* Main Content */}
      <div
        className={`
          flex flex-col justify-center items-center gap-8
          px-5 sm:px-10 md:px-20 pt-20
          bg-gradient-to-br from-[#1E1749] via-[#3B2E7C] to-[#7B6CBC]
          ${showOverlay ? 'blur-sm pointer-events-none select-none' : ''}
        `}
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
            onClick={() => setShowOverlay(true)}
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
        <div className="w-full max-w-[1440px] flex-grow flex items-end">
          <img
            src="/images/frame4.png"
            alt="Sales Graphic"
            className="
              w-full
              object-cover
              object-bottom
              max-h-[500px]
              max-w-[1000px]
              mx-auto
            "
          />
        </div>
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
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
