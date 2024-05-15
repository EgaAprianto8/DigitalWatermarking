import Image from "next/image";
import Link from "next/link";

const HeroSectionLP = () => {
  return (
    <div className="relative lg:mt-0 mt-[125px] w-full min-h-screen px-4 sm:px-10 flex flex-col gap-2 drop-shadow-lg py-20 justify-center bg-hero">
      <div className=" w-full px-4 sm:px-10 xl:container space-y-4">
        <h3 className="text-white text-shadow text-base md:text-lg lg:text-2xl font-bold max-w-[800px] w-[650px] text-justify tracking-wide">"Tingkatkan keamanan dan otentikasi digital Anda dengan Implementasi Frequency Domain Watermarking berbasis website menggunakan metode Discrete Cosine Transform (DCT). Solusi cerdas untuk melindungi karya Anda di dunia digital."</h3>
        <p className="text-white text-sm lg:text-base max-w-[680px] text-justify sm:text-left">
        ~Unveiling the Unseen
        </p>
        <Link href="/#project">
          <button className="place-self-end text-white bg-gradient-to-r from-cyan-500 to-[#1dbbb4] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2">
            See The Project
          </button>
        </Link>
      </div>
    </div>
  ); 
};

export default HeroSectionLP;
