import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeHeadings from './utils/rehype-headings.js';

// custom highlighter due to inability to add classes otherwise
// see https://github.com/pngwn/MDsveX/issues/100
function highlighter(code) {
	return `<pre class="box"><code>${code}</code></pre>`;
}

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		highlighter
	},

	remarkPlugins: [],
	rehypePlugins: [rehypeSlug, rehypeHeadings]
});

export default config;
