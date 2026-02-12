/** @type {import('next').NextConfig} */
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.NODE_ENV === "production" ? "/annas_delicacies" : "");

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  compiler: {
    styledComponents: true,
  },
  // Disable powered by Next.js header
  poweredByHeader: false,
  // Enable strict mode
  reactStrictMode: true,
};

module.exports = nextConfig;
