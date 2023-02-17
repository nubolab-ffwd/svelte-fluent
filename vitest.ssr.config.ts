import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import ssrResolvePlugin from './src/lib/site/plugin';

export default defineConfig({
	plugins: [sveltekit(), ssrResolvePlugin()],
	test: {
		environment: 'node',
		include: ['tests/ssr/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		setupFiles: 'tests/setup.js',
		transformMode: {
			ssr: [/\.([cm]?[jt]sx?|json|svelte)$/]
		}
	}
});
