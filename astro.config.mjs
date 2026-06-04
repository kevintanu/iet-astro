// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://www.indoenergytekniko.com",
  integrations: [
    react(),
    // Exclude /lp/* ad landing pages from the sitemap — they're noindex,
    // for paid campaigns only, and must not be surfaced for organic SEO.
    sitemap({
      filter: (page) => !page.includes('/lp/'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare({
    imageService: {
      build: 'compile',
      runtime: 'passthrough'
    }
  })
});