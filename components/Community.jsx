import { companies } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Community = () => {
  return (
    <div className="p-5 section_containers flex flex-col">
      <h2 className="text_white_100 text-xs font-bold capitalize">
        our community trend
      </h2>
      <p className="text_white_200 text-xs">
        this is what our community members are investing in
      </p>
      <div className="flex flex-col gap-3 mt-8">
        {companies.map((company, index) => {
          return (
            <div key={index} className="flex items-center gap-3">
              <Image
                src={company.icon}
                width={50}
                height={50}
                alt={company.name}
              />
              <div className="flex flex-col">
                <h3 className="text_white_100 text-xs font-medium">
                  {company.name}
                </h3>
                <p className="text_gray text-[8px]">{company.type}</p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={
                    company.isGaining
                      ? "/assets/arrow-profit.svg"
                      : "/assets/arrow-loss.svg"
                  }
                  width={16}
                  height={16}
                  alt="arrow icon"
                />
                <p
                  className={`
                    ${company.isGaining ? "text-[#00A478]" : "text-[#FF2424]"}
                    text-[8px] font-bold
                  `}
                >
                  {company.marketValue}
                </p>
              </div>
              <p className="text_white_100 text-xs font-bold">
                {company.amount}
              </p>
              <Link href="" className="arrow_button my-[10px] ml-auto">
                <p className="text_white_200 text-[8px]">Learn More</p>
                <Image
                  src="/assets/arrow-right.svg"
                  width={16}
                  height={16}
                  alt="arrow right icon"
                />
              </Link>
            </div>
          );
        })}
      </div>
      <Link href="" className="arrow_button my-[10px] mx-auto">
        <p className="text_gray text-[8px]">See All</p>
        <Image
          src="/assets/arrow-right.svg"
          width={16}
          height={16}
          alt="arrow right icon"
        />
      </Link>
    </div>
  );
};

export default Community;
