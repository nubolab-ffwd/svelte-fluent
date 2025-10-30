import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import highlightPlugin from './utils/vite-highlight';
import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		svelteFluent(),
		highlightPlugin({}),
		sveltekit(),
		Icons({ compiler: 'svelte', autoInstall: true })
	],
	ssr: {
		noExternal: ['@nubolab-ffwd/svelte-fluent']
	}
});
