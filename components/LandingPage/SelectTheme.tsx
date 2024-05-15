"use client"

import Image from "next/image";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from 'flowbite-react';

const SelectTheme = () => {
  const [showMore, setShowMore] = useState<Array<boolean>>([false, false, false]);

  // Fungsi untuk mengubah status showMore pada indeks tertentu
  const toggleShowMore = (index: number) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };
  return (
    <section id="watermarking">
      <div className="relative flex flex-col w-full px-4 sm:px-10 xl:container justify-center items-center my-20">

        <div className="container flex justify-center items-center mb-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl uppercase flex flex-col gap-y-2 text-center">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='font-semibold'
            >
              Our Algorithm
            </motion.span>
            <div className="ml-32">
            <motion.span
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Is All YOU <span className='font-bold text-[#1dbbb4]'>NEED</span>
            </motion.span>
            </div>
              
          </h1>
        </div>
        
        <p className="w-full text-justify text-xl sm:text-center mt-4 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        
        <div className="container mx-auto relative w-full h-full">
        <div className='flex flex-col justify-center items-center w-full h- py-20'>

        <div className="flex justify-around flex-col md:flex-row flex-wrap items-center gap-[50px] h-full">
          {[0, 1].map((index) => (
            <div key={index} className={`m-6 sm:m-0 max-w-[500px] max-h-full z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${showMore[index] ? 'h-full' : ''}`}>
              <Card

                className="h-full"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>
                    {index === 0 ? 'Enkripsi Pesan dengan AES' :  'Sembunyikan Pesan dalam Gambar dengan LSB'}
                  </p>
                </h5>
                <p className={`font-normal text-gray-700 dark:text-gray-400 ${showMore[index] ? '' : 'line-clamp-3 lg:line-clamp-5'}`}>
                  {index === 0 ? 'Tahapan utama dalam AES melibatkan inisialisasi kunci, putaran (rounds), dan operasi pada blok data. Pertama, kunci enkripsi diinisialisasi sesuai dengan panjang kunci yang dipilih, seperti 128-bit, 192-bit, atau 256-bit. Kemudian, proses putaran terdiri dari empat tahap: SubBytes, ShiftRows, MixColumns, dan AddRoundKey. SubBytes menggantikan setiap byte dengan byte dari tabel substitusi S-box, sementara ShiftRows merandomisasi data dengan menggeser baris-baris dalam blok. MixColumns mengubah kolom-kolom menggunakan operasi perkalian matriks, dan AddRoundKey menggabungkan blok data dengan kunci putaran. Proses putaran berulang hingga jumlah putaran selesai, menghasilkan tingkat keamanan yang tinggi sambil mempertahankan efisiensi operasional yang baik. Dengan demikian, AES menggabungkan langkah-langkah ini untuk mengamankan data dan melindungi informasi sensitif.' : 'Metode Least Significant Bit (LSB) dalam steganografi gambar melibatkan beberapa tahapan.  Proses dimulai dengan memilih piksel-piksel dari gambar yang akan digunakan sebagai tempat untuk menyisipkan pesan rahasia. Selanjutnya, pesan rahasia diubah menjadi urutan bit (binary), dan setiap bit dari pesan tersebut disisipkan secara berurutan ke dalam LSB dari saluran warna (red, green, blue) pada piksel yang dipilih. Proses ini berulang hingga seluruh pesan tersembunyi telah disisipkan. Jika jumlah bit pesan melebihi kapasitas gambar, perlu dilakukan rekonsiliasi. Akhirnya, gambar hasil yang telah dimodifikasi dengan pesan rahasia disimpan untuk distribusi atau penyimpanan lebih lanjut.' }
                </p>
                <button type="button" onClick={() => toggleShowMore(index)} className="place-self-end text-white bg-gradient-to-r from-cyan-500 to-[#1dbbb4] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2">
                  {showMore[index] ? 'Show Less' : 'Read More'}
                </button>
              </Card>
            </div>
          ))}
        </div>
      </div>
        
        </div>

        <div className="hidden sm:block absolute -bottom-0 -right-20 z-[-1]">
          <div className="relative aspect-square w-[608px] h-[656px]">
            <Image
              src="/images/bg-vector-3-1.png"
              alt="bg-vector"
              fill={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SelectTheme;
