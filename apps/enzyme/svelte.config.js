import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			'@styles/*': './src/styles/*'
		},
		adapter: adapter({
			fallback: 'index.html',
			pages: 'dist',
			assets: 'dist'
		})
	}
};

export default config;
