import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/package').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		alias: {
			$site: 'src/site',
			'@nubolab-ffwd/svelte-fluent': 'src/lib' // used in examples so that import look more like real-world usage
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/svelte-fluent' : '',
			relative: false
		}
	}
};

export default config;
