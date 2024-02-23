/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import { basename, dirname, join } from 'pathe';
import sveltePackage from 'svelte/package.json' assert { type: 'json' };
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import ssrResolvePlugin from './src/site/plugin';
import highlightPlugin from './utils/highlight-plugin';
import semver from 'semver';

const svelteMajor = semver.major(sveltePackage.version);

export default defineConfig({
	plugins: [
		ssrResolvePlugin(),
		highlightPlugin({}),
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
		setupFiles: 'src/tests/setup.js',
		resolveSnapshotPath: (testPath, snapExtension) => {
			return join(
				join(dirname(testPath), '__snapshots__', `svelte@${svelteMajor}`),
				`${basename(testPath)}${snapExtension}`
			);
		}
	}
});
