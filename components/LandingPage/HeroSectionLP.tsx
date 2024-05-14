import Image from "next/image";

const HeroSectionLP = () => {
  return (
    <div className="relative lg:mt-0 mt-[125px] w-full h-[558px] px-4 sm:px-10 flex flex-col gap-2 drop-shadow-lg py-20 justify-center bg-hero">
      <div className=" w-full px-4 sm:px-10 xl:container space-y-4">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold max-w-[765px]">
          DO NOT LOSE HOPE, NOR BE SAD
        </h1>
        <h3 className="text-white text-base md:text-lg lg:text-2xl font-bold">Quran 3:129</h3>
        <p className="text-white text-sm lg:text-base max-w-[680px] text-justify sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button className="bg-[#1DBBB4] w-[154px] h-[48px] rounded-xl mt-4">
          <a className="place-self-center">Read more</a>
        </button>
      </div>
    </div>
  ); 
};

export default HeroSectionLP;
