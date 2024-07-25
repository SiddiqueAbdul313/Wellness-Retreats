/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { ThreeCircles } from "react-loader-spinner";

export default function Card({ filterValue, currentPage, loader, setLoader }) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    mockData();
  }, [filterValue, currentPage]);

  const mockData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/retreats?filter=${
          filterValue ? filterValue : ""
        }&page=${currentPage}&limit=5`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (Array.isArray(data)) {
        setCardData(data);
      } else {
        setCardData([]);
      }
    } catch (error) {
      setCardData([]);
    } finally {
      setLoader(false);
    }
  };

  const FormattedDateRange = ({ startTimestamp, duration }) => {
    const startDate = new Date(startTimestamp * 1000);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + duration - 1);
    const formattedStartDate = format(startDate, "MMMM d");
    const formattedEndDate = format(endDate, "d, yyyy");

    return (
      <span>
        {formattedStartDate}-{formattedEndDate}
      </span>
    );
  };

  return (
    <div className="card overflow-x-auto py-4">
      {loader ? (
        <div className="flex justify-center items-center h-64">
          <ThreeCircles height={80} width={80} color="#1b3252" />
        </div>
      ) : (
        <div className="sm:flex sm:gap-4 flex-nowrap gap-3">
          {cardData.length > 0 ? (
            cardData.map((card) => (
              <div
                key={card.id}
                className="bg-[#e0d9ce] p-5 rounded-lg flex-shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] mb-3"
              >
                <div className="relative w-2/4 h-32 sm:h-40 rounded-md sm:rounded-3xl overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover bg-center w-full h-full"
                    fill="true"
                  />
                </div>
                <div className="mt-5 sm:leading-7">
                  <h2 className="text-xl mb-2 font-bold">{card.title}</h2>
                  <p>{card.description}</p>
                  <p>
                    Date:{" "}
                    <FormattedDateRange
                      startTimestamp={card.date}
                      duration={card.duration}
                    />
                  </p>
                  <p>Type: {card.type}</p>
                  <p>Location: {card.location}</p>
                  <p className="font-semibold">Price: ${card.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="h-40 w-full flex justify-center items-center bg-[#e0d9ce] rounded-lg px-5">
              <p className="font-bold text-3xl">No Retreats Found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
