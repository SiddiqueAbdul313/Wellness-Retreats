/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

export default function Card() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    mockData();
  }, []);

  const mockData = async () => {
    try {
      const res = await fetch(
        "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log("mockData", data);
      setCardData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="card overflow-x-auto py-4 ">
      <div className="sm:flex sm:gap-4 flex-nowrap gap-3">
        {cardData.map((card) => {
          console.log("card", card);
          return (
            <div
              key={card.id}
              className="bg-[#e0d9ce] p-5  rounded-lg flex-shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] mb-3"
            >
              <div className="relative w-full h-32 sm:h-40 rounded-md sm:rounded-3xl overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover bg-center w-full h-full"
                  fill
                />
              </div>
              <div className="mt-5 sm:leading-7">
                <h2 className="text-xl mb-2 font-bold">{card.title}</h2>
                <p>{card.description}</p>
                <p>Date: {card.date}</p>
                <p>Location: {card.location}</p>
                <p className="font-semibold">Price: ${card.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}