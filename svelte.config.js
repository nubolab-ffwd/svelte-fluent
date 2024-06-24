import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isPreview = process.env.BUILD_PREVIEW === '1';
const isProdBuild = process.env.NODE_ENV === 'production';

const base = isProdBuild && !isPreview ? '/svelte-fluent' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		alias: {
			$site: 'src/site',
			'@nubolab-ffwd/svelte-fluent': 'src/lib', // used in examples so that import look more like real-world usage
			'@nubolab-ffwd/svelte-fluent/legacy': 'src/lib/legacy' // used in examples so that import look more like real-world usage
		},
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
