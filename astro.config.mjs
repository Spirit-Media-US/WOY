import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: process.env.PUBLIC_SITE_URL || 'https://workonyourself.com',
	output: 'static',
	server: { port: 4324, host: true },
	integrations: [sitemap()],
	vite: {
		server: { allowedHosts: true },
		plugins: [tailwindcss()],
	},
});
