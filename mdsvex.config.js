import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeWrap from 'rehype-wrap-all';
import { defaultHighlighter } from './utils/highlight.js';
import rehypeHeadings from './utils/rehype-headings.js';

// escape curlies, backtick, \t, \r, \n to avoid breaking output of {@html `here`} in .svelte
/**
 *
 * @param str string
 * @returns string
 */
export const escape_svelty = (str) =>
	str
		.replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' }[c]))
		.replace(/\\([trn])/g, '&#92;$1');

async function code_highlight(code, lang) {
	const highlighted = (await defaultHighlighter).codeToHtml(code, { lang });
	return `{@html \`${escape_svelty(highlighted)}\`}`;
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
		[rehypeWrap, { selector: 'table', wrapper: 'div.responsive-table' }],
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		[rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2', 'h3', 'h4', 'h5', 'h6'] }]
	]
});

export default config;
