import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { getHighlighter } from 'shiki';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fluentGrammar = JSON.parse(readFileSync(resolve(__dirname, './fluent.tmLanguage.json')));

export const defaultHighlighter = getHighlighter({
	theme: 'dark-plus',
	langs: ['shellscript', 'svelte', { id: 'ftl', scopeName: 'source.ftl', grammar: fluentGrammar }]
});
