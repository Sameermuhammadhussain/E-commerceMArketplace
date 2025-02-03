/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Enables React's strict mode
  swcMinify: true,        // Uses the SWC compiler for faster builds
  images: {
    domains: [
      'images.unsplash.com', // Add images.unsplash.com
      'plus.unsplash.com',    // Add plus.unsplash.com
      'next-ecommerce-template-4.vercel.app', // Add next-ecommerce-template-4.vercel.app
    ],
  },
};

export default nextConfig;
