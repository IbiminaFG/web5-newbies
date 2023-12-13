"use client";

import Accordion from "@/components/Accordion";
import GridFrame from "@/components/GridFrame";
import Header from "@/components/Header";
import LearnMore from "@/components/LearnMore";
import SearchBar from "@/components/SearchBar";
import SlantedContainer from "@/components/SlantedContainer";
import SlidingTextContainer from "@/components/SlidingTextContainer";
import Image from "next/image";
import Link from "next/link";
import TopRadialBall from "@/components/TopRadialBall";
import { useEffect, useState } from "react";

export default function Home() {
  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState(null);
  const [collapseDid, setCollapseDid] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const texts = ["Companion", "Partner 😀"];
  const icons = [
    "/assets/cryptocurrency.svg",
    "/assets/cryptocurrency-1.svg",
    "/assets/cryptocurrency-2.svg",
    "/assets/cryptocurrency-3.svg",
    "/assets/cryptocurrency-4.svg",
    "/assets/cryptocurrency-5.svg",
    "/assets/cryptocurrency-6.svg",
    "/assets/cryptocurrency-7.svg",
    "/assets/cryptocurrency-8.svg",
    "/assets/cryptocurrency-9.svg",
    "/assets/cryptocurrency.svg",
    "/assets/cryptocurrency-1.svg",
    "/assets/cryptocurrency-2.svg",
    "/assets/cryptocurrency-3.svg",
    "/assets/cryptocurrency-4.svg",
    "/assets/cryptocurrency-5.svg",
    "/assets/cryptocurrency-6.svg",
    "/assets/cryptocurrency-7.svg",
    "/assets/cryptocurrency-8.svg",
    "/assets/cryptocurrency-9.svg",
    "/assets/cryptocurrency.svg",
    "/assets/cryptocurrency-1.svg",
    "/assets/cryptocurrency-2.svg",
    "/assets/cryptocurrency-3.svg",
    "/assets/cryptocurrency-4.svg",
    "/assets/cryptocurrency-5.svg",
    "/assets/cryptocurrency-6.svg",
    "/assets/cryptocurrency-7.svg",
    "/assets/cryptocurrency-8.svg",
    "/assets/cryptocurrency-9.svg",
  ];

  const accordions = [
    {
      date: "18 dec. 2023",
      title: "project launch",
      texts: [
        "help educate about how to use",
        "expand market and community",
        "speak with users for feedbacks",
      ],
    },
    {
      date: "18 dec. 2023",
      title: "listing and platform launch",
      texts: [
        "help educate about how to use",
        "expand market and community",
        "speak with users for feedbacks",
      ],
    },
    {
      date: "18 dec. 2023",
      title: "growth and education",
      texts: [
        "help educate about how to use",
        "expand market and community",
        "speak with users for feedbacks",
      ],
    },
    {
      date: "18 dec. 2023",
      title: "launch and expansion",
      texts: [
        "help educate about how to use",
        "help educate about how to use",
        "help educate about how to use",
      ],
    },
  ];

  useEffect(() => {
    const initWeb5 = async () => {
      const { Web5 } = await import("@web5/api/browser");

      const answer = confirm("Are you sure you want to connect to web?");

      if (answer) {
        const { web5, did } = await Web5.connect();
        console.log("did", did);
        setWeb5(web5);
        setMyDid(did);

        if (web5 && did) {
          const firstSix = did.substring(0, 6);
          const lastSix = did.substring(did.length - 6);
          const finalResult = `${firstSix}......${lastSix}`;
          setCollapseDid(finalResult);
          setIsConnected(true);
        }
      }
    };
    initWeb5();
  }, []);

  return (
    <>
      <Header isConnected={isConnected} collapseDid={collapseDid} />
      <main className="sm:py-24 pb-40 relative overflow-hidden">
        <TopRadialBall />
        <SearchBar />
        <h1 className="heading_text">Decentralized Financial </h1>
        <SlidingTextContainer texts={texts} />
        <p className="text-primary-gray text-center px-3 text-base sm:text-2xl font-normal capitalize mt-[50px] mb-[50px] max-w-[1000px] mx-auto">
          decentralized financial companion that transforms savings and
          investments into an engaging and secured experience. aligned with
          business goal of expanding market share in the decentralized finance
          sector.
        </p>
        <div className="flex justify-center items-center gap-[40px] text-primary-white">
          <Link href="/dashboard" className="button_style">
            <span>Watch Demo</span>{" "}
          </Link>
        </div>
        <div className="flex justify-center items-center mt-6 text-sm sm:text-2xl font-bold text-primary-white gap-1">
          <span className="capitalize">learn about our launch date</span>
          <Link href="/">
            <Image
              src="/assets/arrow-right.svg"
              width={32}
              height={32}
              alt="arrow icon"
              className="w-[20px] h-[20px]"
            />
          </Link>
        </div>
        <SlantedContainer icons={icons} />
        <section className="flex flex-col items-center px-3 sm:px-[100px]">
          <h1 className="btn text-primary-white">Our Core</h1>
          <h2 className="heading_text">what is buddy xplora?</h2>
          <p className="text-primary-gray text-center text-base sm:text-2xl font-normal capitalize mt-[50px] mb-[50px] max-w-[1000px] mx-auto">
            buddy xplora is a decentralized financial companion that transforms
            savings and investment into an engaging and secure experience{" "}
          </p>
          <div className="flex p-5 sm:p-[50px] mvp_container relative">
            <div>
              <h2 className="lineHeight-sm text-base sm:text-[40px] font-bold capitalize text-primary-white">
                buddy xplora minimum viable product
              </h2>
              <p className="capitalize text-sm sm:text-lg text-primary-gray mt-4 mb-4 sm:mt-[49px] sm:mb-[30px]">
                the MVP landing page provides a glimpse into the exciting world
                of decentralised savings and investment. with a focus on
                simplicity, security and education, the mVP landing page
                introduces key features to engage potential users
              </p>
              <LearnMore />
            </div>
            <div className="hidden md:block w-full h-full">
              <Image
                src="/assets/mvp.png"
                width={300}
                height={300}
                alt="minimum viable product"
                className="h-[441px] w-[588px] absolute top-0 -right-[100px]"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center px-3 sm:px-[100px] relative overflow-x-hidden">
          <TopRadialBall />
          <h1 className="btn text-primary-white mt-[132px]">Core Features</h1>
          <h2 className="heading_text">building amazing services</h2>
          <p className="text-primary-gray text-center text-base sm:text-2xl font-normal capitalize mt-0 mb-5 sm:mt-[50px] sm:mb-[50px]">
            these are core features of what we are building
          </p>
          <GridFrame />
        </section>
        <section className="flex flex-col items-center px-3 sm:px-[100px]">
          <h1 className="btn text-primary-white mt-7 sm:mt-[132px]">
            Our Road Map
          </h1>
          <h2 className="heading_text">our journey explained</h2>
          <p className="text-primary-gray text-center text-base sm:text-2xl font-normal capitalize mt-0 sm:mt-[50px] mb-8 sm:mb-[50px]">
            these are key journey and goals we have set
          </p>
          <div className="flex flex-col gap-[30px]">
            {accordions.map((accordion, index) => (
              <Accordion accordion={accordion} key={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
