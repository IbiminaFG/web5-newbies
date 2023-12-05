import Image from "next/image";
import React from "react";
import LearnMore from "./LearnMore";

const GridFrame = () => {
  const features = [
    {
      image: "/assets/grid-image-1.png",
      icon: "/assets/frame-1.svg",
      iconText: "100% secured",
      text: "saving zones personalized space for setting and tracking saving goals.",
    },
    {
      image: "/assets/grid-image-2.png",
      icon: "/assets/frame-2.svg",
      iconText: "give a hand",
      text: "community lending games playful lending and borrowing activities.",
    },
    {
      image: "/assets/grid-image-3.png",
      icon: "/assets/frame-3.svg",
      iconText: "invest your money",
      text: "investment portfolios making investment tangible and enjoyables",
    },
    {
      image: "/assets/grid-image-1.png",
      icon: "/assets/frame-4.svg",
      iconText: "explore market",
      text: "financial marketplace teasing the variety of products users can explore and invest in",
    },
    {
      image: "/assets/grid-image-2.png",
      icon: "/assets/frame-5.svg",
      iconText: "ehance your security",
      text: "verifiable credentials ehance security and establish creditworthiness",
    },
    {
      image: "/assets/grid-image-3.png",
      icon: "/assets/frame-6.svg",
      iconText: "interaction for reward",
      text: "financial quest encouraging regular user interaction for rewards ",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-y-4">
      {features.map((feature, index) => (
        <div key={index} className="relative frame_border">
          <div className="frame-icon flex gap-[18px] items-center absolute top-5 left-5">
            <Image
              src={feature.icon}
              width={50}
              height={50}
              alt="frame one icon"
            />
            <span className="text-primary-white text-sm sm:text-2xl font-bold">
              {feature.iconText}
            </span>
          </div>
          <Image
            src={feature.image}
            width={500}
            height={400}
            alt="frame-image"
          />
          <p className="capitalize text-primary-white text-sm sm:text-2xl mb-5">
            {feature.text}
          </p>
          <LearnMore />
        </div>
      ))}
    </div>
  );
};

export default GridFrame;
