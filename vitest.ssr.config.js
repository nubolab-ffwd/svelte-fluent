import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config.js';
import { sveltekit } from '@sveltejs/kit/vite';

// this basically does the same as src/lib/rollup-plugin.js but with different paths
const ssrResolvePlugin = () => {
	let resolveResult;

	return {
		name: 'ssr-resolve',
		enforce: 'pre',

		async resolveId(source) {
			if (source === '/src/lib/index.ts') {
				if (!resolveResult) {
					resolveResult = this.resolve('/src/lib/ssr.ts');
				}
				return await resolveResult;
			}
		}
	};
};

export default mergeConfig(
	viteConfig,
	defineConfig({
		plugins: [ssrResolvePlugin()],
		test: {
			environment: 'node',
			include: ['tests/ssr/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
			transformMode: {
				ssr: [/\.([cm]?[jt]sx?|json|svelte)$/]
			},
			setupFiles: 'tests/setup.js'
		}
	})
);
