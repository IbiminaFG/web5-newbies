import Image from "next/image";
import React from "react";
import LearnMore from "../LearnMore";
import Link from "next/link";

const RightSideBar = () => {
  return (
    <section className="flex-auto right_side_bar h-screen w-[400px] md:flex flex-col gap-5 hidden">
      <div className="flex gap-5 w-full items-center p-5 user_icon_container">
        <Image
          src="/assets/user-image.png"
          width={50}
          height={50}
          alt="user-image"
        />
        <div className="flex flex-col">
          <p className="text_white_100 capitalize text-base font-bold">
            imade nweke
          </p>
          <p className="text_gray text-xs capitalize">self employed</p>
        </div>
      </div>
      <div className="mx-5">
        <h2 className="text_white_100 text-xs font-medium capitalize mb-3">
          my investments
        </h2>
        <div className="investment_container flex flex-col items-center">
          <Image
            src="/assets/no-results.png"
            width={85}
            height={85}
            alt="no-results image"
          />
          <p className="text_white_100 text-[8px] capitalize">
            you don’t have any running investment
          </p>
          <Link href="" className="arrow_button my-[10px]">
            <p className="text_gray text-[8px]">Learn More</p>
            <Image
              src="/assets/arrow-right.svg"
              width={16}
              height={16}
              alt="arrow right icon"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
