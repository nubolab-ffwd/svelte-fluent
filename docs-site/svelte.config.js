import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isProdBuild = process.env.NODE_ENV === 'production';

const base = isProdBuild ? '/svelte-fluent' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		paths: {
			base,
			relative: false
		},
		prerender: {
			handleHttpError({ path, message }) {
				if (path === base + '/robots.txt') {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
