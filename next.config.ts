import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // firebase-admin должен быть external в serverless функциях Vercel
  // иначе Turbopack ломает его require() ESM-модулей jose/jwks-rsa
  serverExternalPackages: [
    "firebase-admin",
    "firebase-admin/auth",
    "firebase-admin/firestore",
    "firebase-admin/app",
    "firebase-admin/storage",
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
