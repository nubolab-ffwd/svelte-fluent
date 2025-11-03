import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { createHighlighter } from 'shiki';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fluentGrammar = JSON.parse(
	readFileSync(resolve(__dirname, './fluent.tmLanguage.json')).toString()
);

/**
 * @param {string?} meta
 * @returns {string | null}
 */
function parseMetaTitleString(meta) {
	if (!meta) {
		return null;
	}
	const match = meta.match(/title="([^"]*)"/);
	if (!match) {
		return null;
	}
	return match[1];
}

export const theme = 'dark-plus';
const themes = [theme];
const langs = [
	'diff',
	'html',
	'shellscript',
	'svelte',
	{ name: 'ftl', scopeName: 'source.ftl', ...fluentGrammar }
];

/** @type {import('shiki').ShikiTransformer[]} */
export const defaultTransformers = [
	{
		name: 'svelte-fluent-docs:title',
		pre(elem) {
			const title = parseMetaTitleString(this.options.meta?.__raw);
			elem.properties['data-title'] = title;
			delete elem.properties.style;
		}
	}
];

export const defaultHighlighter = createHighlighter({ themes, langs });

/**
 *
 * @param {string} code
 * @param {string} lang
 * @param {string?} meta
 * @param {import('shiki').ShikiTransformer[]?} transformers
 * @returns {Promise<string>}
 */
export async function highlight(code, lang, meta, transformers) {
	const hl = await defaultHighlighter;
	return hl.codeToHtml(code, {
		lang,
		theme,
		transformers: [...defaultTransformers, ...(transformers ?? [])],
		meta: meta ? { __raw: meta } : undefined
	});
}
