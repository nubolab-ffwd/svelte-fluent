import type { SvelteFluent } from './fluent.js';
import { getContext, setContext } from 'svelte';

const CONTEXT_KEY = Symbol('svelte-fluent');

export type FluentContext = {
	localize: SvelteFluent['localize'];
};

type FluentContextInternal = {
	fluent: SvelteFluent;
	public: FluentContext;
};

export function initFluentContext(fn: () => SvelteFluent): FluentContext {
	const fluent = $derived(fn());
	const ctx: FluentContextInternal = {
		get fluent() {
			return fluent;
		},
		public: {
			localize: (...args) => fluent.localize(...args)
		}
	};
	return setContext(CONTEXT_KEY, ctx).public;
}

export function getInternalFluentContext(): FluentContextInternal {
	const ctx = getContext<FluentContextInternal>(CONTEXT_KEY);
	if (!ctx) {
		throw new Error('[svelte-fluent] FluentContext was not initialized');
	}
	return ctx;
}

export function getFluentContext(): FluentContext {
	return getInternalFluentContext().public;
}
