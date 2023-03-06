<script lang="ts">
	import type { FluentBundle } from '@fluent/bundle';
	import { CachedSyncIterable } from 'cached-iterable';
	import { writable } from 'svelte/store';
	import { createEventDispatcher, tick } from 'svelte';
	import { initStores } from './stores';

	export let bundles: Iterable<FluentBundle> = [];

	const initialTick = tick();
	const dispatch = createEventDispatcher<{ error: string }>();

	$: cachedBundles = CachedSyncIterable.from(bundles);

	const bundlesStore = writable(cachedBundles);
	$: $bundlesStore = cachedBundles;

	initStores(bundlesStore, async (msg) => {
		await initialTick;
		dispatch('error', msg);
	});
</script>

<slot />
