"use client";

import { navs } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Bottombar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="fixed bottom-0 w-full md:hidden bg-[#0A0B18] p-2">
      <nav className="flex justify-between">
        {navs.map((link, index) => {
          const isActive =
            //   (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              key={index}
              href={link.route}
              onClick={(e) => console.log(e)}
              className={`flex flex-row gap-3 items-center py-[6px] px-3 ${
                isActive && "active_bottom"
              }`}
            >
              <Image src={link.icon} width={24} height={24} alt={link.title} />
              <p className="small_text hidden">{link.title}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Bottombar;
