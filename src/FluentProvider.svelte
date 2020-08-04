<script context="module">
  import { getContext, setContext } from 'svelte'
  import { mapBundleSync } from '@fluent/sequence'
  import { derived, readable, writable } from 'svelte/store'
  import { CachedSyncIterable } from 'cached-iterable'

  const CONTEXT_KEY = {}

  export function stores () {
    const ctx = getContext(CONTEXT_KEY)
    if (!ctx) {
      console.error('<FluentProvider/> was not found in component hierarchy.')
      return {
        getBundle: readable(id => null)
      }
    }
    const { bundles } = ctx
    return {
      getBundle: derived(bundles, $bundles => id => mapBundleSync($bundles, id))
    }
  }
</script>

<script>
  export let bundles = []

  const { subscribe, set } = writable(CachedSyncIterable.from(bundles))
  $: set(CachedSyncIterable.from(bundles))

  setContext(CONTEXT_KEY, {
    bundles: { subscribe }
  })
</script>

<slot />
