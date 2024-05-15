"use client"

import Image from "next/image";
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
const AboutUs = () => {
  return (
    <section id="about">
      <div className="relative flex px-4 sm:px-10 xl:container flex-col-reverse lg:flex-row justify-center items-center gap-12 pt-16 pb-24 sm:pt-0 sm:pb-0">

        <div className="flex flex-col gap-6 sm:gap-4 bg-white z-[1] px-2 sm:px-0">
        <div className="px-4 py-4 sm:py-20 z-50">
          <div className="sm:container overflow-x-hidden">
            <h1 className="ml-2 sm:ml-0 text-xl sm:text-3xl md:text-5xl uppercase flex flex-col lg:max-h-[40px] lg:gap-2 lg:mt-[130px]">
            <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='font-semibold'
              >
                Introducing <span className="font-normal">About</span>
              </motion.span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className='font-bold text-[#1dbbb4]'>DISCRETE COSINE TRANSFORM (DCT)</span>
              </motion.span>
            </h1>
            <div
              className="max-w-[800px] mx-auto p-6 sm:px-8 sm:py-12 rounded-md bg-white border border-gray-600 mt-4 md:[90px] lg:mt-[120px]"
            >
              <h1 className="text-xl sm:text-2xl tracking-widest uppercase font-bold">Advanced Encryption Standard</h1>
              <p className="sm:text-lg max-w-2xl mt-4 mb-6 text-left sm:text-justify">
                <span className="text-colorfull-blue font-semibold">AES</span>  Merupakan algoritma kriptografi yang sering digunakan untuk enkripsi dan dekripsi data. <span className="text-blue-500 font-semibold">   Dalam prosesnya, AES mengubah blok data menjadi blok data terenkripsi menggunakan kunci tertentu.</span>Proses enkripsi dan dekripsi melibatkan serangkaian langkah operasi, seperti SubBytes, ShiftRows, MixColumns, dan AddRoundKey. AES telah menjadi standar yang diakui secara internasional dan sering digunakan dalam berbagai aplikasi untuk melindungi data sensitif.
              </p>
              {/* <Disclosure>              
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Keamanan Tinggi.</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                    AES telah terbukti menjadi algoritma kriptografi yang sangat aman. Berdasarkan desain dan analisis yang ketat, AES memberikan tingkat keamanan yang tinggi terhadap berbagai serangan kriptografi yang diketahui saat ini. Ini termasuk serangan brute-force (mencoba semua kemungkinan kunci secara bergantian), serangan differensial, dan serangan linier. Dengan kata lain, bahkan dengan komputasi canggih, memecahkan enkripsi AES tanpa kunci yang benar menjadi sangat sulit.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 mb-2 text-left text-base font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Kualitas Visual Gambar</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                    Metode Least Significant Bit (LSB) memungkinkan pengguna akan menyembunyikan pesan dalam gambar tanpa mengurangi kualitas visualnya. Pengguna tetap dapat menikmati gambar dengan jelas dan tanpa gangguan, sementara pesan rahasia tetap tersembunyi dengan aman.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>              
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Kombinasi Teknologi </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                    Gabungan AES dan LSB membentuk solusi yang kuat dan inovatif untuk menyembunyikan pesan dalam gambar. Dengan menggabungkan keamanan tingkat tinggi dari AES dan efisiensi penyembunyian pesan dari LSB, aplikasi ini menawarkan solusi yang seimbang antara keamanan dan kualitas visual gambar yang optimal.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure> */}
            </div>
          </div>
        </div>
        </div>

        <div className="relative mt-0 xl:mt-40 border-4 border-[#0C7C95] w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[595px] xl:h-[477px] bg-white z-[1]">
          <div>
            <div className="absolute -top-5 sm:-top-10 -left-5 sm:-left-10 z-0">
              <div className="relative aspect-square w-[250px] h-[230px] sm:w-[395px] sm:h-[377px] xl:w-[495px] xl:h-[477px]">
                <Image src="/images/mosque1.png" alt="bg-vector" fill={true} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -left-12 z-[1]">
          <div className="relative aspect-square w-[608px] h-[656px]">
            <Image
              src="/images/bg-vector-3-2.png"
              alt="bg-vector"
              fill={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
