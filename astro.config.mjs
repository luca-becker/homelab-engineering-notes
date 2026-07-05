import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Neutraler Platzhalter — echte Domain trägst du beim Deploy selbst ein.
export default defineConfig({
  site: 'https://example.dev',
  integrations: [mdx()],
});
