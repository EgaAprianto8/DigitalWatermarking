/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false 
        };
      }
  
      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
        },
      ],
    },
  };
  
  export default nextConfig;
  
