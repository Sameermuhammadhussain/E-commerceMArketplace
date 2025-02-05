/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  
  images: {
    domains: [
      'images.unsplash.com', // Add images.unsplash.com
      'plus.unsplash.com',    // Add plus.unsplash.com
      'next-ecommerce-template-4.vercel.app', // Add next-ecommerce-template-4.vercel.app
    ],
  },
};

export default nextConfig;
