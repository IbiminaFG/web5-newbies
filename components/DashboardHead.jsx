import { dashboardNav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardHead = () => {
  return (
    <div className="section_containers flex justify-between items-center px-5 py-5 bg-[#0A0B18]">
      <h1 className="text_white_100 text-xl font-medium">Dashboard</h1>
      <nav className="flex gap-7 items-center">
        {dashboardNav.map((link, index) => {
          return (
            <Link href={link.route} key={index}>
              <Image src={link.icon} width={32} height={32} alt={link.label} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default DashboardHead;
