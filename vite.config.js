/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';
import { basename, dirname, join } from 'pathe';
import sveltePackage from 'svelte/package.json' assert { type: 'json' };
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import ssrResolvePlugin from './src/site/plugin';
import highlightPlugin from './utils/highlight-plugin';
import semver from 'semver';
import { svelteTesting } from '@testing-library/svelte/vite';

const svelteMajor = semver.major(sveltePackage.version);
const isSsrTest = process.env.TEST_SSR === '1';

/** @type {Partial<import('vite').UserConfig['test']>} */
const testConfigDom = {
	environment: 'jsdom',
	include: ['src/tests/dom/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
};

/** @type {Partial<import('vite').UserConfig['test']>} */
const testConfigSsr = {
	environment: 'node',
	include: ['src/tests/ssr/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
};

export default defineConfig({
	plugins: [
		ssrResolvePlugin(),
		highlightPlugin({}),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		}),
		isSsrTest ? undefined : svelteTesting()
	].filter(Boolean),
	test: {
		setupFiles: 'src/tests/setup.js',
		resolveSnapshotPath: (testPath, snapExtension) => {
			return join(
				join(dirname(testPath), '__snapshots__', `svelte@${svelteMajor}`),
				`${basename(testPath)}${snapExtension}`
			);
		},
		...(isSsrTest ? testConfigSsr : testConfigDom)
	}
});
