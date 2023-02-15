import { sveltekit } from '@sveltejs/kit/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import Icons from 'unplugin-icons/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: 'node_modules/shiki',
					dest: '.'
				}
			]
		}),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	]
};

export default config;
