export const TEXT_LEVEL_ELEMENTS = [
	'em',
	'strong',
	'small',
	's',
	'cite',
	'q',
	'dfn',
	'abbr',
	'data',
	'time',
	'code',
	'var',
	'samp',
	'kbd',
	'sub',
	'sup',
	'i',
	'b',
	'u',
	'mark',
	'bdi',
	'bdo',
	'span',
	'br',
	'wbr'
];
export const COMPONENT_TAG = 'fluent-component';
export const ALLOWED_ELEMENTS = [...TEXT_LEVEL_ELEMENTS, COMPONENT_TAG];

export const LOCALIZABLE_ATTRIBUTES: Record<string, string[]> = {
	global: ['title', 'aria-description', 'aria-label', 'aria-valuetext'],
	a: ['download'],
	area: ['download', 'alt'],
	input: ['alt', 'placeholder'],
	menuitem: ['label'],
	menu: ['label'],
	optgroup: ['label'],
	option: ['label'],
	track: ['label'],
	img: ['alt'],
	textarea: ['placeholder'],
	th: ['abbr']
};

// Matches occurrences of self-closing component tags like `<fluent-component data-element="icon" />`
export const REGEX_SELF_CLOSING_COMPONENT_TAG = new RegExp(`<(${COMPONENT_TAG})\\s[^>]*?\\/>`, 'g');

// Match the opening angle bracket (<) in HTML tags, and HTML entities like
// &amp;, &#0038;, &#x0026;.
export const REGEX_OVERLAY = /<|&#?\w+;/;
