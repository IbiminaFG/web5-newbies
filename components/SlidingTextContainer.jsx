"use client";

import React, { useState, useEffect } from "react";

const texts = ["Text 1", "Text 2", "Text 3"];

const SlidingTextContainer = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliding-text-box flex justify-center items-center">
      <div className="text-container w-full h-full flex justify-center items-center">
        {texts.map((text, index) => (
          <p
            key={index}
            className={`sliding-text self-center ${
              index === currentIndex ? "visible" : ""
            }`}
            style={{
              animation: index === currentIndex ? "scaleInOut 2s forwards" : "",
              animationDelay: `${index * 2}s`, // Adjust the delay for each text
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SlidingTextContainer;
