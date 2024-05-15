import Image from "next/image";
import Link from "next/link";

const HeroSectionLP = () => {
  return (
    <div className="relative lg:mt-0 mt-[125px] w-full min-h-screen px-4 sm:px-10 flex flex-col gap-2 drop-shadow-lg py-20 justify-center bg-hero">
      <div className=" w-full px-4 sm:px-10 xl:container space-y-4">
        <h3 className="text-white text-base md:text-lg lg:text-2xl font-bold">"Tingkatkan keamanan dan otentikasi digital Anda dengan Implementasi Frequency Domain Watermarking berbasis website menggunakan metode Discrete Cosine Transform (DCT). Solusi cerdas untuk melindungi karya Anda di dunia digital."</h3>
        <p className="text-white text-sm lg:text-base max-w-[680px] text-justify sm:text-left">
        ~Unveiling the Unseen
        </p>
        <Link href="/#project">
          <button className="bg-[#1DBBB4] w-[154px] h-[48px] rounded-xl mt-4">
            <a className="place-self-center">See The Project</a>
          </button>
        </Link>
      </div>
    </div>
  ); 
};

export default HeroSectionLP;
