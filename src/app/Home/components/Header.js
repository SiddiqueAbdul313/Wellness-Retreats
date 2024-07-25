import React from "react";

export default function Header({headerTitle}) {
  return (
    <React.Fragment>
      <div>
        <h1 className="bg-[#1b3252] text-white text-2xl p-4 px-5 font-[600] text-center md:text-left">{headerTitle}</h1>
      </div>
    </React.Fragment>
  );
}
