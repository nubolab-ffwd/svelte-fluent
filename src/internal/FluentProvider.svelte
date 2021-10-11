<script context="module">
	import { getContext, setContext, createEventDispatcher } from 'svelte';
	import { mapBundleSync } from '@fluent/sequence';
	import { derived, writable } from 'svelte/store';

	const CONTEXT_KEY = {};

	export function stores() {
		const ctx = getContext(CONTEXT_KEY);
		if (!ctx) {
			console.error('[svelte-fluent] <FluentProvider/> was not found in component hierarchy.');
			return;
		}
		const { bundles, dispatch } = ctx;
		const getBundle = derived(bundles, ($bundles) => (id) => mapBundleSync($bundles, id));
		const getTranslation = derived(bundles, ($bundles) => (id, args) => {
			const bundle = mapBundleSync($bundles, id);
			if (bundle === null) {
				dispatch('error', `[svelte-fluent] Translation missing: "${id}"`);
				return { value: id, attributes: {} };
			}
			const msg = bundle.getMessage(id);
			if (msg === null) {
				dispatch('error', `[svelte-fluent] Translation missing: "${id}"`);
				return { value: id, attributes: {} };
			}
			const value = bundle.formatPattern(msg.value, args);
			const attributes = Object.fromEntries(
				Object.entries(msg.attributes || {}).map(([name, pattern]) => [
					name,
					bundle.formatPattern(pattern, args)
				])
			);
			return { value, attributes };
		});
		const translate = derived(getTranslation, ($getTranslation) => (id, args) => {
			return $getTranslation(id, args).value;
		});
		return { getBundle, getTranslation, translate };
	}
</script>

<script>
	import { CachedSyncIterable } from 'cached-iterable';
	export let bundles = [];

	const { subscribe, set } = writable(CachedSyncIterable.from(bundles));
	$: set(CachedSyncIterable.from(bundles));

	setContext(CONTEXT_KEY, {
		bundles: { subscribe },
		dispatch: createEventDispatcher()
	});
</script>

<slot />
