export {
	initFluentContext,
	getFluentContext,
	useLocalize,
	useSvelteFluent,
	type FluentContext
} from './internal/context.svelte';
export { ComponentElement, TagElement } from './internal/elements.js';
export { createSvelteFluent, type SvelteFluent } from './internal/fluent.js';
export { default as Localized } from './internal/Localized.svelte';
