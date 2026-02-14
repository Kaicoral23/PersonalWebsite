import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  vite: {
    build: {
      inlineStylesheets: 'auto',
    },
  },
});
