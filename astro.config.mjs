import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages (Project Site): ausgeliefert unter <user>.github.io/<repo>/.
// Beim Umzug auf eine eigene Domain: `site` auf die Domain setzen und `base`
// auf '/' ändern (bzw. entfernen).
export default defineConfig({
  site: 'https://luca-becker.github.io',
  base: '/homelab-engineering-notes/',
  integrations: [mdx()],
});
