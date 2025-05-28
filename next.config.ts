import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ["default", "en", "bg"],
    defaultLocale: "bg",
    localeDetection: false,
  },
  trailingSlash: true,
};

export default nextConfig;
