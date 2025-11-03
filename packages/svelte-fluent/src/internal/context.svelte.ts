import type { SvelteFluent } from './fluent.js';
import { getContext, setContext } from 'svelte';

const CONTEXT_KEY = Symbol('svelte-fluent');

type Localize = SvelteFluent['localize'];

class FluentContext {
	fluent: SvelteFluent;

	constructor(getter: () => SvelteFluent) {
		this.fluent = $derived(getter());
	}

	readonly localize: Localize = (...args) => this.fluent.localize(...args);
}

export function setSvelteFluent(getFluent: () => SvelteFluent) {
	setContext(CONTEXT_KEY, new FluentContext(getFluent));
}

function getFluentContext(): FluentContext {
	const ctx = getContext<FluentContext>(CONTEXT_KEY);
	if (!ctx) {
		throw new Error(
			'[svelte-fluent] Svelte context was not initialized. Did you call setSvelteFluent()?'
		);
	}
	return ctx;
}

export function useLocalize(): Localize {
	const ctx = getFluentContext();
	return ctx.localize;
}

export function useSvelteFluent(): { get current(): SvelteFluent } {
	const ctx = getFluentContext();
	return {
		get current() {
			return ctx.fluent;
		}
	};
}
