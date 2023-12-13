import Image from "next/image";
import Link from "next/link";

const Games = () => {
  return (
    <div className="p-5 section_containers flex flex-col">
      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#6205E77D]">
            <Image
              src="/assets/calendar.png"
              width={36}
              height={36}
              alt="calendar icon"
            />
          </div>
          <div className="flex flex-col gap-[9px]">
            <p className="text-xs font text_white_100 capitalize">
              login 7 times a week
            </p>
            <div className="w-[200px] h-[11px] loader rounded-lg">
              <div className="h-full w-[70%] bg-[#6205E7] rounded-lg"></div>
            </div>
          </div>
          <p className="text-base font-bold text_white_100">4/5</p>
        </div>

        {/* secon side */}
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#6205E77D]">
            <Image
              src="/assets/unknown.png"
              width={36}
              height={36}
              alt="calendar icon"
            />
          </div>
          <div className="flex flex-col gap-[9px]">
            <p className="text-xs font text_white_100 capitalize">
              complete quiz (completed)
            </p>
            <div className="w-[200px] h-[11px] loader rounded-lg">
              <div className="h-full w-full bg-[#6205E7] rounded-lg"></div>
            </div>
          </div>
          <p className="text-xs font-bold text-[#00A478] capitalize">
            redeemed
          </p>
        </div>
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

export default Games;
