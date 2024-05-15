/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.min.css";
import typescriptLogo from "../../public/images/typescript.svg";
import { decode, encode, status, load } from "../../lib/watermarking";
import { motion } from "framer-motion";

export default function Project() {
  const [imageEncoded, setImageEncoded] = useState(false);
  useEffect(() => {
    const loadOpenCV = async () => {
      console.log("load opencv");
      try {
        await load();
        (document.querySelector("#opencv") as HTMLImageElement).style.filter =
          "grayscale(0)";
        console.log("load opencv success");
      } catch (e) {
        console.error(e);
        console.log("load opencv error");
      }
    };

    loadOpenCV();
  }, []);

  const handleDownload = () => {
    // Mendapatkan URL gambar hasil encode
    const encodeResultImage = document.querySelector(
      "#encode_result img"
    ) as HTMLImageElement;
    const imageUrl = encodeResultImage.src;

    // Membuat elemen <a> untuk mendownload
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = "watermarked_image.jpg"; // Nama file yang akan diunduh
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files![0];
    event.target.value = "";

    if (file) {
      console.log("file name", file.name);
      console.log("file size", file.size);
      if (!status.loaded && !status.loading) {
        return;
      }
      if (status.loading) return console.log("opencv is loading...");

      const watermarkEl = document.getElementById(
        "watermark"
      ) as HTMLInputElement;

      console.log("start add watermark to file");
      console.time("encode");
      const url = await encode(file, watermarkEl.value || "watermark");
      console.timeEnd("encode");
      console.log("add watermark to file success");

      // Load result
      const encodeResultImage = document.querySelector(
        "#encode_result img"
      ) as HTMLImageElement;
      encodeResultImage.src = url;
      new Viewer(encodeResultImage);

      // Load decode result
      const fetchResult = await fetch(url);
      const arrayBuffer = await fetchResult.arrayBuffer();
      console.time("decode");
      const decodeResult = await decode(arrayBuffer);
      console.timeEnd("decode");
      const decodeResultImage = document.querySelector(
        "#decode_result img"
      ) as HTMLImageElement;
      decodeResultImage.src = decodeResult;
      new Viewer(decodeResultImage);
    }
    setImageEncoded(true);
  };

  return (
    <div>
      <section id="project">
        <div className="container flex justify-center items-center mb-4">
          <h1 className="text-xl sm:text-3xl md:text-5xl  uppercase flex flex-col gap-y-2 text-center">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-semibold"
            >
              ONLINE WEB
            </motion.span>
            <div className="">
              <motion.span
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="font-bold text-[#1dbbb4]">
                  DIGITAL WATERMARKING
                </span>
              </motion.span>
            </div>
          </h1>
        </div>
        <div className="relative flex px-4 sm:px-10 xl:container flex-col-reverse lg:flex-row justify-center items-center gap-12 pt-16 pb-24">
          <div className="w-full md:w-3/4 lg:w-1/2 xl:w-3/5 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="mb-4">
                <label
                  htmlFor="watermark"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Watermark text:
                </label>
                <input
                  id="watermark"
                  type="text"
                  maxLength={10}
                  placeholder="watermark"
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                />
              </div>
              <div className="mb-4">
                
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload file</label>
                  <input 
                  title="input"
                  id="input"
                  type="file"
                  accept="image/gif, image/png, image/jpg, image/jpeg, image/svg"
                  onChange={handleInputChange}className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"/>
              </div>
              <div id="info">
                <div
                  id="result"
                  className="flex flex-col md:flex-row justify-between gap-10"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-2">encoded</h3>
                    <div id="encode_result" className="">
                      <img className="" />
                      {imageEncoded && (
                        <button
                        className="place-self-end text-white bg-gradient-to-r from-cyan-500 to-[#1dbbb4] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2"
                          onClick={handleDownload}
                        >
                          Download Watermarked Image
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold mb-2">decoded</h3>
                    <div id="decode_result" className="">
                      <img className="" />
                    </div>
                  </div>
                </div>
                <div id="logs" className="mt-4">
                  <h3 className="text-lg font-bold mb-2">Logs</h3>
                  <textarea
                    title="logs"
                    readOnly
                    className="border rounded w-full px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
