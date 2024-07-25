import React from "react";

export default function SlideButton({ buttonTitle, onClick }) {
  return (
    <React.Fragment>
      <button
        onClick={onClick}
        className="bg-[#1b3252] text-white px-5 py-2 rounded-3xl sm:rounded-md tracking-wider"
      >
        {buttonTitle}
      </button>
    </React.Fragment>
  );
}
