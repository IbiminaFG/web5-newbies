"use client";

import Image from "next/image";
import React, { useState } from "react";

const Accordion = ({ accordion }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="accordion p-3 sm:px-[50px] sm:py-[30px] relative">
      <div className="bg_image"></div>
      <div className="flex justify-between gap-3 items-center">
        <div className="flex flex-col gap-2 sm:gap-[30px]">
          <p className="font-bold text-xs sm:text-base text-primary-white">
            {accordion.date}
          </p>
          <p className="font-bold text-lg sm:text-6xl text-primary-white capitalize">
            {accordion.title}
          </p>
        </div>
        <button
          onClick={() => setAccordionOpen((prev) => !prev)}
          className="arrow-btn"
        >
          {accordionOpen ? (
            <Image
              src="/assets/arrow-up.svg"
              width={30}
              height={30}
              alt="arrow down icon"
              className="accordion-arrow"
            />
          ) : (
            <Image
              src="/assets/arrow-down.svg"
              width={30}
              height={30}
              alt="arrow down icon"
              className="accordion-arrow"
            />
          )}
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-primary-gray ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mt-3 sm:mt-[20px] accordion_texts flex items-center gap-3 px-1 sm:px-5">
          <div>
            {accordion.texts.map((text, index) => (
              <p key={index} className="text-sm sm:text-2xl">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
