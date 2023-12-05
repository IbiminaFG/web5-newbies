import Image from "next/image";
import Link from "next/link";
import React from "react";

const LearnMore = () => {
  return (
    <Link href="/" className="btn_link text-primary-white">
      Learn More{" "}
      <Image
        src="/assets/arrow-right.svg"
        width={32}
        height={32}
        alt="arrow icon"
      />
    </Link>
  );
};

export default LearnMore;
