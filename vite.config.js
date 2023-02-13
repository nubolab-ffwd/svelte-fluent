import { sveltekit } from '@sveltejs/kit/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
		sveltekit()
	]
};

export default config;
