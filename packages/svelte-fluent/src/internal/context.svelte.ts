import type { SvelteFluent } from './fluent.js';
import { getContext, setContext } from 'svelte';

const CONTEXT_KEY = Symbol('svelte-fluent');

type Localize = SvelteFluent['localize'];

type FluentContext = {
	readonly fluent: SvelteFluent;
	readonly localize: Localize;
};

export function initFluentContext(fn: () => SvelteFluent) {
	const fluent = $derived(fn());
	const ctx: FluentContext = {
		get fluent() {
			return fluent;
		},
		localize: (...args) => fluent.localize(...args)
	};
	setContext(CONTEXT_KEY, ctx);
}

function getFluentContext(): FluentContext {
	const ctx = getContext<FluentContext>(CONTEXT_KEY);
	if (!ctx) {
		throw new Error('[svelte-fluent] FluentContext was not initialized');
	}
	return ctx;
}

export function useLocalize(): Localize {
	const ctx = getFluentContext();
	return ctx.localize;
}

export function useSvelteFluent(): { readonly current: SvelteFluent } {
	const ctx = getFluentContext();
	return {
		get current() {
			return ctx.fluent;
		}
	};
}
