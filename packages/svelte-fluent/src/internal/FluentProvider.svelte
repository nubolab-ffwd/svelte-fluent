<script lang="ts">
	import type { FluentBundle } from '@fluent/bundle';
	import { CachedSyncIterable } from 'cached-iterable';
	import { createEventDispatcher, tick } from 'svelte';
	import { initFluentContext } from './context.svelte';
	import { createSvelteFluent } from './fluent.js';

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

	let { bundles }: { bundles: Iterable<FluentBundle> } = $props();

	const initialTick = tick();
	const dispatch = createEventDispatcher<{ error: string }>();

	let cachedBundles = $derived(new CachedSyncIterableWrapper(CachedSyncIterable.from(bundles)));
	let fluent = $derived(
		createSvelteFluent([...cachedBundles], {
			async onError(msg) {
				await initialTick;
				dispatch('error', msg);
			}
		})
	);

	initFluentContext(() => fluent);
</script>

<slot />
