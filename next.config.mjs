import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withPWA({
  ...nextConfig, // Spread your existing Next.js config
  pwa: {
    dest: 'public', // Destination directory for the PWA files
    disable: process.env.NEXT_PUBLIC_STATUS === 'dev', // Disable PWA in development
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker to activate
  },
});