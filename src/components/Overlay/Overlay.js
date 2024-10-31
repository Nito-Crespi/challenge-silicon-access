//src/components/Overlay/Overlay.js

import React from "react";

const Overlay = ({ isActive, onClose, children }) => {
  if (!isActive) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      onClick={onClose}
    >
      <div
        className="relative h-[80%] w-[60%] rounded-lg bg-eigengrau p-5 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-none bg-transparent transition duration-300 hover:shadow hover:shadow-primary-text"
          onClick={onClose}
        >
          <img
            className="h-8 w-8"
            src={`${process.env.PUBLIC_URL}/assets/svg/x.svg`}
            alt="Cerrar"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
