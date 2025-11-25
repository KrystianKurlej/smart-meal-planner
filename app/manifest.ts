import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Smart Meal Planner',
    short_name: 'SmartMeal',
    description: 'A meal planning application to help you organize your recipes and ingredients.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf9',
    theme_color: '#7ccf00',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}