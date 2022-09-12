import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeHeadings from './utils/rehype-headings.js';
import rehypeShiftHeading from 'rehype-shift-heading';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [rehypeSlug, [rehypeShiftHeading, { shift: 3 }], rehypeHeadings]
});

export default config;
