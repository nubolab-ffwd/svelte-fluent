import { getHighlighter, setCDN, type Highlighter } from 'shiki';
import FluentGrammar from './fluent.tmLanguage.json';

setCDN('/shiki/');

export const defaultHighlighter = getHighlighter({
	theme: 'dark-plus',
	langs: ['shellscript', 'svelte', { id: 'ftl', scopeName: 'source.ftl', grammar: FluentGrammar }]
});

export function code_highlight(highlighter: Highlighter, code: string, lang: string): string {
	return highlighter.codeToHtml(code, { lang });
}
