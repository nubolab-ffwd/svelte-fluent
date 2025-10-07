import type { SvelteFluent } from './fluent.js';
import { getContext, setContext } from 'svelte';

const CONTEXT_KEY = Symbol('svelte-fluent');

type Localize = SvelteFluent['localize'];

export type FluentContext = {
	readonly fluent: SvelteFluent;
	readonly localize: Localize;
};

export function initFluentContext(fn: () => SvelteFluent): FluentContext {
	const fluent = $derived(fn());
	const ctx: FluentContext = {
		get fluent() {
			return fluent;
		},
		localize: (...args) => fluent.localize(...args)
	};
	return setContext(CONTEXT_KEY, ctx);
}

export function getFluentContext(): FluentContext {
	const ctx = getContext<FluentContext>(CONTEXT_KEY);
	if (!ctx) {
		throw new Error('[svelte-fluent] FluentContext was not initialized');
	}
	return ctx;
}

export function useLocalize(): Localize {
	const ctx = getContext<FluentContext>(CONTEXT_KEY);
	return ctx.localize;
}

export function useSvelteFluent(): { readonly current: SvelteFluent } {
	const ctx = getContext<FluentContext>(CONTEXT_KEY);
	return {
		get current() {
			return ctx.fluent;
		}
	};
}
