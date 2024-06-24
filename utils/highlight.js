import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { createHighlighter } from 'shiki';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fluentGrammar = JSON.parse(readFileSync(resolve(__dirname, './fluent.tmLanguage.json')));

const theme = 'dark-plus';
const themes = [theme];
const langs = ['shellscript', 'svelte', { name: 'ftl', scopeName: 'source.ftl', ...fluentGrammar }];

const defaultHighlighter = createHighlighter({ themes, langs });

/**
 *
 * @param {string} code
 * @param {string} lang
 * @returns {string}
 */
export async function highlight(code, lang) {
	const hl = await defaultHighlighter;
	return hl.codeToHtml(code, { lang, theme, langs });
}
