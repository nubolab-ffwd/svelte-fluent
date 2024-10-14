/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import { basename, dirname, join } from 'pathe';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import ssrResolvePlugin from './src/site/plugin';
import highlightPlugin from './utils/highlight-plugin';
import semver from 'semver';
import { createRequire } from 'node:module';
import * as fs from 'node:fs';
import { svelteTesting } from '@testing-library/svelte/vite';

function getSvelteMajor() {
	const require = createRequire(import.meta.url);
	const sveltePackage = JSON.parse(fs.readFileSync(require.resolve('svelte/package.json')));
	return semver.major(sveltePackage.version);
}

const svelteMajor = getSvelteMajor();

export default defineConfig({
	plugins: [
		ssrResolvePlugin(),
		highlightPlugin({}),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		}),
		svelteTesting()
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
