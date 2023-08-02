/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import ssrResolvePlugin from './src/site/plugin';
import highlightPlugin from './utils/highlight-plugin';

export default defineConfig({
	plugins: [
		ssrResolvePlugin(),
		highlightPlugin(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],
	test: {
		environmentMatchGlobs: [
			['src/tests/dom/**', 'jsdom'],
			['src/tests/ssr/**', 'node']
		],
		include: ['src/tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		setupFiles: 'src/tests/setup.js'
	}
});
