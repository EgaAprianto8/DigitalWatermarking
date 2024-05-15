// WatermarkLogic.js
import { encode, decode, load } from './watermarking';

export async function handleImageProcessing(file, watermark) {
  if (!file) return;

  try {
    await load();
    const url = await encode(file, watermark || 'watermark');
    const fetchResult = await fetch(url);
    const arrayBuffer = await fetchResult.arrayBuffer();
    const decodeResult = await decode(arrayBuffer);
    return { encodedUrl: url, decodedUrl: decodeResult };
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
}
