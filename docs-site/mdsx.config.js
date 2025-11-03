import { defineConfig } from 'mdsx';
import { rehypeHeadings, rehypeUnescapeSvelte } from './utils/rehype.js';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import rehypeClassNames from 'rehype-class-names';
import { defaultHighlighter, theme, defaultTransformers } from './utils/highlight.js';
import rehypeShikiFromHighlighter from '@shikijs/rehype/core';

export const mdsxConfig = defineConfig({
	extensions: ['.svelte.md'],
	blueprints: {
		default: {
			path: 'src/lib/markdown/Layout.svelte'
		}
	},
	rehypePlugins: [
		rehypeUnescapeSvelte,
		[
			rehypeShikiFromHighlighter,
			await defaultHighlighter,
			{ theme, transformers: defaultTransformers }
		],
		rehypeSlug,
		rehypeHeadings,
		[
			rehypeClassNames,
			{
				code: 'code'
			}
		],
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		[rehypeAutolinkHeadings, { behavior: 'wrap', test: ['h2', 'h3', 'h4', 'h5', 'h6'] }]
	]
});
