import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import highlightPlugin from './utils/highlight-plugin';
import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';

export default defineConfig({
	plugins: [
		svelteFluent(),
		highlightPlugin({}),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],
	ssr: {
		noExternal: ['svelte-fluent-examples', '@nubolab-ffwd/svelte-fluent']
	}
});
