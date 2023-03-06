import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import ssrResolvePlugin from './src/site/plugin';
import highlightPlugin from './utils/highlight-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		ssrResolvePlugin(),
		highlightPlugin(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	]
};

export default config;
