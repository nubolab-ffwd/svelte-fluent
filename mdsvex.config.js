import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeHeadings from './utils/rehype-headings.js';
import rehypeWrap from 'rehype-wrap-all';
import { getHighlighter, setCDN } from 'shiki';

const highlighter = await getHighlighter({
	theme: 'dark-plus'
});

function code_highlight(code, lang) {
	return highlighter.codeToHtml(code, { lang });
}

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},
	highlight: {
		highlighter: code_highlight
	},

	remarkPlugins: [],
	rehypePlugins: [
		rehypeSlug,
		rehypeHeadings,
		[rehypeWrap, { selector: 'table', wrapper: 'div.responsive-table' }]
	]
});

export default config;
