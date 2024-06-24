import type { SvelteFluent } from './fluent';
import { getContext, setContext } from 'svelte';
import { getTranslation } from './translation';

const CONTEXT_KEY = Symbol('svelte-fluent');

// utility type to get all args except first of getTranslation function
type getTranslationArgs = typeof getTranslation extends (
	fluent: SvelteFluent,
	...rest: infer R
) => unknown
	? R
	: never;

export type FluentContext = {
	localize: SvelteFluent['localize'];
};

type FluentContextInternal = {
	getTranslation: (...args: getTranslationArgs) => ReturnType<typeof getTranslation>;
	public: FluentContext;
};

export function initFluentContext(fn: () => SvelteFluent): FluentContext {
	const fluent = $derived(fn());
	const ctx: FluentContextInternal = {
		getTranslation: (...args) => getTranslation(fluent, ...args),
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
