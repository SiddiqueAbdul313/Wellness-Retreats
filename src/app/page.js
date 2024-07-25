"use client";
import React, { useState } from "react";
import Header from "./Home/components/Header";
import HeroSection from "./Home/components/HeroSection";
import FilterDropdown from "./Home/components/FilterDropdown";
import SearchBar from "./Home/components/SearchBar";
import Card from "./Home/components/Card";
import SlideButton from "./Home/components/SlideButton";
import { HeroData } from "../../HeroSectionData";

export default function Home() {
  const dates = ["2023-2024", "2024-2025"];
  const types = [
    "detox",
    "diet",
    "relaxation",
    "camp",
    "flexibility",
    "workshop",
  ];
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(true);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-full h-screen bg-white">
      <Header headerTitle="Wellness Retreats" />
      <div className="mx-3 sm:m-5">
        <HeroSection
          heroImage={HeroData[0].heroImage}
          heroTitle={HeroData[0].heroTitle}
          heroDesc={HeroData[0].heroDescription}
        />
        <div className="flex-col sm:flex-row sm:flex items-center gap-4 ">
          <FilterDropdown
            filterTitle="Filter by Date"
            options={dates}
            setFilterValue={setFilterValue}
          />
          <FilterDropdown
            filterTitle="Filter by Type"
            options={types}
            setFilterValue={setFilterValue}
          />
          <SearchBar setFilterValue={setFilterValue} />
        </div>
        <Card
          filterValue={filterValue}
          currentPage={currentPage}
          loader={loader}
          setLoader={setLoader}
        />
      </div>
      <div className="relative flex justify-center gap-5">
        <SlideButton
          buttonTitle="Previous"
          onClick={() => handlePreviousPage()}
        />
        <SlideButton buttonTitle="Next" onClick={() => handleNextPage()} />
      </div>
      <span className="text-[#030303ff] my-5 leading-7 text-center flex justify-center">
        © 2024 Wellness Retreats. All rights reserved.
      </span>
    </div>
  );
}
