import React from "react";

export default function FilterDropdown() {
  return (
    <React.Fragment>
      <div>
        <select
          name=""
          id=""
          className="bg-[#f0f0f0] border-[1px] sm:bg-[#1b3252] w-full sm:w-auto px-1 mt-4 py-3 font-[500] tracking-wide rounded-md text-[#535c69] sm:text-white outline-none"
        >
          <option defaultValue="" selected>
            Filter by Date
          </option>
          <option value="2023-2024">2023-2024</option>
          <option value="2024-2025">2024-2025</option>
        </select>
      </div>
    </React.Fragment>
  );
}
