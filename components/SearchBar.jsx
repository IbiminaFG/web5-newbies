"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const placeholders = [
    "When Is Your Launch Date",
    "What Is Web5",
    "What Are Your Core Features",
    "What Are Your Goals",
    "Who Are Your Team Members",
  ];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 4000); // Change 2000 to the desired interval in milliseconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="search_bar_container flex items-center py-2 px-3 sm:p-[13px] justify-between mx-auto">
      <div className="ask_container hidden sm:flex text-primary-white">
        Ask Your Questions
      </div>
      <input
        type="text"
        placeholder={placeholders[currentPlaceholderIndex]}
        className="w-full text-sm sm:text-xl sm:w-[50%] bg-transparent outline-none"
      />
      <Image
        src="/assets/search-normal.svg"
        height={32}
        width={32}
        alt="search icon"
      />
    </div>
  );
};

export default SearchBar;
