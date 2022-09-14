import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config.js';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: 'jsdom',
			include: ['tests/dom/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
			setupFiles: 'tests/setup.js'
		}
	})
);
