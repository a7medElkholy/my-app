import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://ecommerce.routemisr.com/api/v1/products
  images : {
    remotePatterns : [
      {
        protocol : "https",
        hostname : "ecommerce.routemisr.com" ,
        pathname : "/Route-Academy-**/**"
      }
    ]
  }
};

export default nextConfig;
