import { getHighlighter, setCDN } from 'shiki';
import FluentGrammar from './fluent.tmLanguage.json';

setCDN('/shiki/');

const highlighter = await getHighlighter({
	theme: 'dark-plus',
	langs: ['shellscript', 'svelte', { id: 'ftl', scopeName: 'source.ftl', grammar: FluentGrammar }]
});

export function code_highlight(code: string, lang: string): string {
	return highlighter.codeToHtml(code, { lang });
}
