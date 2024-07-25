/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function HeroSection({heroImage,heroTitle,heroDesc}) {
  return (
    <React.Fragment>
      <div className="bg-[#e0d9ce] h-[450px] relative rounded-lg flex justify-center items-center flex-col p-3 hidden sm:block">
        <div className="relative w-full h-80 rounded-lg overflow-hidden">
          <img
            src={heroImage}
            alt="Wellness Retreats Yoga"
            layout="fill"
            className="object-cover w-full bg-center"
          />
        </div>
        <div className="text-left w-full p-5">
          <h2 className="text-lg md:text-2xl mb-3">
            {heroTitle}
          </h2>
          <p className="text-sm md:text-lg">
            {heroDesc}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
