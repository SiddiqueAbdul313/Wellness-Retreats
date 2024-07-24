import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FilterDropdown from "./components/FilterDropdown";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import SlideButton from "./components/SlideButton";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white">
      <Header />
      <div className="mx-3 sm:m-5">
        <HeroSection />
        <div className="flex-col sm:flex-row sm:flex items-center gap-4 ">
          <FilterDropdown />
          <FilterDropdown />
          <SearchBar/>
        </div>
          <Card/>
      </div>
      <div className="relative flex justify-center gap-5">
      <SlideButton buttonTitle="Previous" />
      <SlideButton buttonTitle="Next" />
      </div>
      <span className="text-[#030303ff] my-5 leading-7 text-center flex justify-center">© 2024 Wellness Retreats. All rights reserved.</span>
    </div>
  );
}
