import nextPwa from "next-pwa";
import {DEV_MODE} from "./src/config/Constants";

const isDev = process.env.NEXT_PUBLIC_STATUS === DEV_MODE;

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// Apply nextPwa only in production
export default isDev ? nextConfig : nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
})(nextConfig);
