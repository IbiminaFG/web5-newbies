"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const SlantedContainer = ({ icons }) => {
  const [position, setPosition] = useState(-100);
  const [direction, setDirection] = useState(1); // 1 for moving right, -1 for moving left
  const [distanceMoved, setDistanceMoved] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (direction === 1 && distanceMoved < 100) {
        setPosition((prevPosition) => prevPosition + 1);
        setDistanceMoved((prevDistance) => prevDistance + 1);
      } else if (direction === 1 && distanceMoved === 100) {
        setDirection(-1); // Change direction to move left
      } else if (direction === -1 && distanceMoved > 0) {
        setPosition((prevPosition) => prevPosition - 1);
        setDistanceMoved((prevDistance) => prevDistance - 1);
      } else if (direction === -1 && distanceMoved === 0) {
        setDirection(1); // Change direction to move right
      }
    }, 50); // Adjust the interval for desired speed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [direction, distanceMoved]);

  return (
    <div className="slanted-icon-container py-8 md:py-16 my-24">
      <div
        className="slanted-icon-inner"
        style={{ transform: `translateX(${position}%)` }}
      >
        {icons.map((icon, index) => (
          <Image src={icon} width={50} height={50} alt="crypto" key={index} />
        ))}
      </div>
    </div>
  );
};

export default SlantedContainer;
