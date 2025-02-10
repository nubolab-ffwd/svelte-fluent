import { defineConfig } from 'vitest/config';
import { basename, dirname, join } from 'pathe';
import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';
import semver from 'semver';
import { svelteTesting } from '@testing-library/svelte/vite';
import { createRequire } from 'node:module';
import * as fs from 'node:fs';
import { svelte } from '@sveltejs/vite-plugin-svelte';

function getSvelteMajor() {
	const require = createRequire(import.meta.url);
	const sveltePackage = JSON.parse(
		fs.readFileSync(require.resolve('svelte/package.json')).toString()
	);
	return semver.major(sveltePackage.version);
}

const svelteMajor = getSvelteMajor();
const isSsrTest = process.env.TEST_SSR === '1';

/** @type {Partial<import('vite').UserConfig['test']>} */
const testConfigDom = {
	environment: 'jsdom',
	include: ['tests/dom/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
};

/** @type {Partial<import('vite').UserConfig['test']>} */
const testConfigSsr = {
	environment: 'node',
	include: ['tests/ssr/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
};

export default defineConfig({
	plugins: [svelteFluent(), svelte(), isSsrTest ? undefined : svelteTesting()].filter(Boolean),
	test: {
		setupFiles: 'tests/setup.js',
		resolveSnapshotPath: (testPath, snapExtension) => {
			return join(
				join(dirname(testPath), '__snapshots__', `svelte@${svelteMajor}`),
				`${basename(testPath)}${snapExtension}`
			);
		},
		...(isSsrTest ? testConfigSsr : testConfigDom)
	}
});
