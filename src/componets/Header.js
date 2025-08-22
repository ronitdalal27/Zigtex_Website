import React, { useState } from 'react';

export default function Header() {
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
      {/* Header */}
      <header
        className={`
          flex flex-wrap justify-between items-center
          w-full
          px-4 sm:px-6 md:px-8 py-4
          bg-white max-w-[1200px] mx-auto
          ${showOverlay ? 'blur-sm pointer-events-none select-none' : ''}
        `}
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
            max-[300px]:hidden
          "
        />

        {/* Waitlist Button */}
        <button
          onClick={() => setShowOverlay(true)}
          className="
            mt-2 sm:mt-0
            px-4 py-2
            sm:px-5 sm:py-2.5
            rounded-full
            bg-gradient-to-b from-[#1E1749] to-[#7B6CBC]
            text-white text-sm sm:text-base font-semibold leading-6
            outline-none border-none
            flex-shrink
            max-[300px]:mx-auto max-[300px]:block
          "
        >
          Join The Waitlist
        </button>
      </header>

      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/20 flex items-center justify-center px-4">

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
