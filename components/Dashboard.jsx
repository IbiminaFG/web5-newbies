import React from "react";
import DashboardHead from "./DashboardHead";
import Link from "next/link";
import Image from "next/image";
import Community from "./Community";
import Games from "./Games";

const Dashboard = () => {
  return (
    <section className="px-[9px] flex flex-col max-md:pb-[80px] gap-5">
      <DashboardHead />
      <article className="py-5 px-9 bg-[#6205E7] rounded-[20px] relative overflow-hidden">
        <div className="flex flex-col gap-1 items-start w-[196px]">
          <h2 className="lh text_white_100 text-[32px] font-bold m-0 capitalize">
            Better ways to invest
          </h2>
          <p className="m-0 text_gray capitalize text-xs font-medium">
            Learn more about investing
          </p>
          <Link href="" className="arrow_button bg-white">
            <p className="text_purple text-[8px] font-bold">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.62 3.95334L13.6667 8.00001L9.62 12.0467"
                stroke="#6205E7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.33337 8H13.5534"
                stroke="#6205E7"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Image
            src="/assets/woman.png"
            width={168}
            height={147}
            className="absolute right-0 bottom-0"
          />
        </div>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Community />
        <Games />
      </div>
    </section>
  );
};

export default Dashboard;
