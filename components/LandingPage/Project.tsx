/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.min.css';
import typescriptLogo from '../../public/images/typescript.svg';
import { decode, encode, status, load } from '../../lib/watermarking';

export default function Project() {
  useEffect(() => {
    const loadOpenCV = async () => {
      console.log('load opencv');
      try {
        await load();
        (document.querySelector('#opencv') as HTMLImageElement).style.filter = 'grayscale(0)';
        console.log('load opencv success');
      } catch(e) {
        console.error(e);
        console.log('load opencv error');
      }
    };

    loadOpenCV();
  }, []);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    event.target.value = '';

    if (file) {
      console.log('file name', file.name);
      console.log('file size', file.size);
      if (!status.loaded && !status.loading) {
        return;
      };
      if (status.loading) return console.log('opencv is loading...');

      const watermarkEl = document.getElementById('watermark') as HTMLInputElement;

      console.log('start add watermark to file');
      console.time('encode');
      const url = await encode(file, watermarkEl.value || 'watermark');
      console.timeEnd('encode')
      console.log('add watermark to file success');

      // Load result
      const encodeResultImage = document.querySelector('#encode_result img') as HTMLImageElement;
      encodeResultImage.src = url;
      new Viewer(encodeResultImage)

      // Load decode result
      const fetchResult = await fetch(url)
      const arrayBuffer = await fetchResult.arrayBuffer();
      console.time('decode')
      const decodeResult = await decode(arrayBuffer);
      console.timeEnd('decode')
      const decodeResultImage = document.querySelector('#decode_result img') as HTMLImageElement;
      decodeResultImage.src = decodeResult;
      new Viewer(decodeResultImage);
    }
  };

  return (
    <div>
      <section id="about">
        <div className="relative flex px-4 sm:px-10 xl:container flex-col-reverse lg:flex-row justify-center items-center gap-12 pt-16 pb-24">
          <h1 style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
              src={typescriptLogo} 
              alt="TypeScript Logo"
              width={32} 
              height={32} 
            />
            Online Web Digital Watermarking
            <img id="opencv" style={{ height: 32, marginLeft: 8, filter: 'grayscale(1)' }} src="https://opencv.org/wp-content/uploads/2022/05/logo.png" alt="OpenCV Logo" />
          </h1>
          <div>
            <input id="input" type="file" accept="image/gif, image/png, image/jpg, image/jpeg, image/svg" onChange={handleInputChange} />
            <label>Watermark text: </label><input id="watermark" type="text" maxLength={10} placeholder="watermark" />
          </div>

          <div id="info">
            <div id="result">
              <h3>encoded</h3>
              <div id="encode_result">
                <img />
              </div>
              <h3>decoded</h3>
              <div id="decode_result">
                <img />
              </div>
            </div>
            <div id="logs">
              <h3>Logs</h3>
              <textarea readOnly></textarea>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
