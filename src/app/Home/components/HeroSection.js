import Image from "next/image";
import React from "react";
import YogaImageOne from "../../../../assets/yoga_image_1.jpg";

export default function HeroSection() {
  return (
    <React.Fragment>
      <div className="bg-[#e0d9ce] h-[450px] relative rounded-lg flex justify-center items-center flex-col p-3 hidden sm:block">
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
          <Image
            src={YogaImageOne}
            alt="Yoga image"
            layout="fill" 
            className="object-cover"
          />
        </div>
        <div className="text-left w-full p-5">
          <h2 className="text-lg md:text-2xl mb-3">Discover Your Inner Peace</h2>
          <p className="text-sm md:text-lg">Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
