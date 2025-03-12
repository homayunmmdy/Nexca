import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nexca , The Ultimate Admin Panel for Agencies and Individuals',
    short_name: 'Nexca',
    description: 'Nexca offers a robust admin panel for agencies and individuals, enabling seamless data management, content sharing, and audience engagement.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#4338CA',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}