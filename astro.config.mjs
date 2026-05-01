import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://zamana.com.tr',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  compressHTML: true,
  prefetch: true,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
