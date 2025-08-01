import nextPwa from "next-pwa";

const isDev = process.env.NEXT_PUBLIC_STATUS === "dev";

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
  runtimeCaching: [
    {
      urlPattern: /\/manifest\.json$/,
      handler: 'NetworkFirst'
    }
  ]
})(nextConfig);
