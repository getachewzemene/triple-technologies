import { defineConfig } from 'astro/config';

// Set SITE_URL in Vercel (e.g. https://your-domain) to enable canonical + OG absolute URLs.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
