import React from 'react';
import Contact from './Contact';

export default function ContactModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm">
      {/* Modal content container */}
      <div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl">
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Contact Form */}
        <Contact />
      </div>
    </div>
  );
}
