import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ isConnected, collapseDid }) => {
  return (
    <header className="flex justify-between items-center p-3 sm:px-16 sm:py-10">
      <Link
        href="/"
        className="w-[114px] text-center lineHeight-sm text-primary-white"
      >
        BUDDY XPLORA
      </Link>
      <nav className="hidden sm:block">
        <ul className="flex gap-[40px] items-center">
          <li className="text-[#969696]">
            <Link href="/">Docs</Link>
          </li>
          <li className="text-[#969696]">
            <Link href="/">About</Link>
          </li>
          <li className="text-[#969696]">
            <Link href="/">Services</Link>
          </li>
        </ul>
      </nav>
      {isConnected ? (
        <div className="flex items-center justify-center bg-gray-600 px-5 py-3 rounded-xl ">
          <p className="text-primary-white text-lg">{collapseDid}</p>
        </div>
      ) : (
        <button className="button_style">
          <span>Watch Demo</span>{" "}
          <Image
            src="/assets/play-circle.svg"
            width={20}
            height={20}
            alt="play icon"
          />
        </button>
      )}
    </header>
  );
};

export default Header;
