import React from "react";

export default function FilterDropdown({
  filterTitle,
  options,
  setFilterValue,
}) {
  function convertToUnixTimestamps(dateRange) {
    const [startYear] = dateRange.split("-").map((year) => parseInt(year));
    const startDate =
      new Date(Date.UTC(startYear, 7, 25, 0, 0, 0)).getTime() / 1000;
    return { startDate };
  }

  function handleSelectChange(e) {
    const selectedOption = e.target.value;
    const { startDate } = convertToUnixTimestamps(selectedOption);
    if (startDate) {
      const slicedValue = parseInt(startDate.toString().slice(0, 2));
      setFilterValue(slicedValue);
    } else {
      setFilterValue(e.target.value);
    }
  }

  return (
    <div>
      <select
        onChange={handleSelectChange}
        className="bg-[#f0f0f0] border-[1px] sm:bg-[#1b3252] w-full sm:w-auto px-1 mt-4 py-3 font-[500] tracking-wide rounded-md text-[#535c69] sm:text-white outline-none"
      >
        <option value="" className="capitalize">
          {filterTitle}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option} className="capitalize">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
