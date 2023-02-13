import Prism from 'prismjs';
import 'prism-svelte';

export function code_highlight(code: string, lang: 'svelte'): string {
	return Prism.highlight(code, Prism.languages[lang], lang);
}
