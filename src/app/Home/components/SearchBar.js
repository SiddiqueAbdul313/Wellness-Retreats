import { debounce } from "lodash";
import React from "react";

export default function SearchBar({ setFilterValue }) {
  const handleSearch = debounce((value) => {
    setFilterValue(value);
  }, 1000);
  return (
    <React.Fragment>
      <div className="w-full flex justify-end">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          type="search"
          className="sm:bg-[#1b3252] py-2 mt-4 w-full sm:w-[35%] rounded-md border-[1px] text-[#535c69] sm:text-white tracking-wider outline-none font-[500] px-3"
          placeholder="Search retreats by title"
        />
      </div>
    </React.Fragment>
  );
}
