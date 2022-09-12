import mm from 'micromatch';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({ postcss: true }), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		alias: {
			'@nubolab-ffwd/svelte-fluent': 'src/lib' // used in examples so that import look more like real-world usage
		},
		package: {
			files: mm.matcher('!site/**/*')
		}
	}
};

export default config;
