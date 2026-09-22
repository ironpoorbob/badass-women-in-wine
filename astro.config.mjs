import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { BASE_PATH } from './src/config/site.js';

const siteUrl = process.env.SITE_URL || 'https://www.badasswomeninwine.org';

// https://astro.build/config
export default defineConfig({
    site: siteUrl,
    base: BASE_PATH,
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});
