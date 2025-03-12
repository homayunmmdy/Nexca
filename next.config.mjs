import nextPwa from "next-pwa";

const nextConfig = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
})({
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
});

export default nextConfig;
