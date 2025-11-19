import { defineConfig } from 'vitest/config';
import { basename, dirname, join } from 'pathe';
import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';
import semver from 'semver';
import { svelteTesting } from '@testing-library/svelte/vite';
import { createRequire } from 'node:module';
import * as fs from 'node:fs';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const isSsrTest = process.env.TEST_SSR === '1';

function getSvelteVersion() {
	const require = createRequire(import.meta.url);
	const sveltePackage = JSON.parse(
		fs.readFileSync(require.resolve('svelte/package.json')).toString()
	);
	return sveltePackage.version;
}

function getSnapshotDir() {
	const svelteVersion = getSvelteVersion();
	const svelteMajor = semver.major(svelteVersion);
	if (semver.satisfies(svelteVersion, '<5.39.0')) {
		return `svelte@${svelteMajor}-pre-async`;
	}
	return `svelte@${svelteMajor}`;
}

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
				join(dirname(testPath), '__snapshots__', getSnapshotDir()),
				`${basename(testPath)}${snapExtension}`
			);
		},
		...(isSsrTest ? testConfigSsr : testConfigDom)
	}
});
