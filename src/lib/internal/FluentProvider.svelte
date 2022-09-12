<script context="module" type="ts">
	import { getContext, setContext, createEventDispatcher } from 'svelte';
	import { mapBundleSync } from '@fluent/sequence';
	import { derived, writable, type Readable } from 'svelte/store';
	import type { FluentBundle, FluentVariable } from '@fluent/bundle';

	const CONTEXT_KEY = {};

	type EventMap = {
		error: string;
	};
	type Context = {
		bundles: Readable<Iterable<FluentBundle>>;
		dispatch: (...args: Parameters<ReturnType<typeof createEventDispatcher<EventMap>>>) => void;
	};
	export type Translation = {
		value: string;
		attributes: Record<string, string>;
	};
	type Stores = {
		getBundle: Readable<(id: string) => FluentBundle | null>;
		getTranslation: Readable<(id: string, args?: Record<string, FluentVariable>) => Translation>;
		translate: Readable<(id: string, args?: Record<string, FluentVariable>) => string>;
	};

	export function stores(): Stores {
		const ctx = getContext<Context>(CONTEXT_KEY);
		if (!ctx) {
			throw new Error('[svelte-fluent] <FluentProvider/> was not found in component hierarchy.');
		}
		const { bundles, dispatch } = ctx;
		const getBundle = derived(bundles, ($bundles) => (id: string) => mapBundleSync($bundles, id));
		const getTranslation = derived(
			bundles,
			($bundles) =>
				(id: string, args?: Record<string, FluentVariable>): Translation => {
					const bundle = mapBundleSync($bundles, id);
					if (bundle === null) {
						dispatch('error', `[svelte-fluent] Translation missing: "${id}"`);
						return { value: id, attributes: {} };
					}
					const msg = bundle.getMessage(id);
					if (!msg || msg.value === null || msg.value === undefined) {
						dispatch('error', `[svelte-fluent] Translation missing: "${id}"`);
						return { value: id, attributes: {} };
					}
					const errors: Error[] = [];
					const value = bundle.formatPattern(msg.value, args, errors);
					const attributes = Object.fromEntries(
						Object.entries(msg.attributes || {}).map(([name, pattern]) => [
							name,
							bundle.formatPattern(pattern, args, errors)
						])
					);
					for (const err of errors) {
						dispatch('error', `[svelte-fluent] Translation error: ${err}`);
					}
					return { value, attributes };
				}
		);
		const translate = derived(
			getTranslation,
			($getTranslation) => (id: string, args?: Record<string, FluentVariable>) => {
				return $getTranslation(id, args).value;
			}
		);
		return { getBundle, getTranslation, translate };
	}
</script>

<script type="ts">
	import { CachedSyncIterable } from 'cached-iterable';
	import { tick } from 'svelte';
	export let bundles: Iterable<FluentBundle> = [];

	const initialTick = tick();
	const dispatch = createEventDispatcher<EventMap>();

	const bundlesStore = writable(CachedSyncIterable.from(bundles));
	$: $bundlesStore = CachedSyncIterable.from(bundles);

	setContext<Context>(CONTEXT_KEY, {
		bundles: { subscribe: bundlesStore.subscribe },
		dispatch: (...args: Parameters<typeof dispatch>) => {
			initialTick.then(() => dispatch(...args));
		}
	});
</script>

<slot />
