import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsx } from 'mdsx';
import { mdsxConfig } from './mdsx.config.js';

const isProdBuild = process.env.NODE_ENV === 'production';

const base = isProdBuild ? '/svelte-fluent' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsxConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsx(mdsxConfig), vitePreprocess()],

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
