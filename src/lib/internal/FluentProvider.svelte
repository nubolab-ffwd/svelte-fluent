<script lang="ts">
	import type { FluentBundle } from '@fluent/bundle';
	import { CachedSyncIterable } from 'cached-iterable';
	import { writable } from 'svelte/store';
	import { createEventDispatcher, tick } from 'svelte';
	import { initStores } from './stores';

	// Wrapper class that prevents an exception in svelte-devtools
	// It hides the CachedSyncIterable in a non-enumerable property
	// causing it to be ignored when svelte-devtools clones the component state.
	class CachedSyncIterableWrapper<T> {
		// @ts-expect-error property gets assigned via Object.defineProperty
		private iterable: CachedSyncIterable<T>;

		constructor(iterable: CachedSyncIterable<T>) {
			Object.defineProperty(this, 'iterable', { value: iterable, enumerable: false });
		}

		[Symbol.iterator]() {
			return this.iterable[Symbol.iterator]();
		}
	}

	export let bundles: Iterable<FluentBundle> = [];

	const initialTick = tick();
	const dispatch = createEventDispatcher<{ error: string }>();

	$: cachedBundles = new CachedSyncIterableWrapper(CachedSyncIterable.from(bundles));

	const bundlesStore = writable(cachedBundles);
	$: $bundlesStore = cachedBundles;

	initStores(bundlesStore, async (msg) => {
		await initialTick;
		dispatch('error', msg);
	});
</script>

<slot />
