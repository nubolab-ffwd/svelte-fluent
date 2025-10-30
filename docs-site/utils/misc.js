// escape curlies, backtick, \t, \r, \n to avoid breaking output of {@html `here`} in .svelte
/**
 *
 * @param {string} str
 * @returns {string}
 */
export function escape_svelty(str) {
	return str
		.replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' })[c])
		.replace(/\\([trn])/g, '&#92;$1');
}

export const symbolIsHighlightedCode = Symbol('isHighlightedCode')
