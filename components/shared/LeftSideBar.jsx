"use client";

import Link from "next/link";
import { navs } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const LeftSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="left_side_bar h-screen w-[400px] hidden md:block">
      <Link
        href="/"
        className="w-[114px] text-center lineHeight-sm text-primary-white"
      >
        BUDDY XPLORA
      </Link>
      <h1 className="text_16">Menu</h1>
      <nav>
        <ul className="flex flex-col gap-5">
          {navs.map((link, index) => {
            const isActive =
              //   (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <li key={index}>
                <Link
                  href={link.route}
                  onClick={(e) => console.log(e)}
                  className={`flex flex-row gap-3 items-center ${
                    isActive && "active"
                  }`}
                >
                  <Image
                    src={link.icon}
                    width={24}
                    height={24}
                    alt={link.title}
                  />
                  <p className="small_text">{link.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default LeftSideBar;
