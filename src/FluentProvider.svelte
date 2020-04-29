<script context="module">
  import { getContext } from "svelte";
  import { mapBundleSync } from "@fluent/sequence";
  import { derived } from "svelte/store";

  const CONTEXT_KEY = {};

  export function stores() {
    const ctx = getContext(CONTEXT_KEY);
    if (!ctx) {
      console.error("<FluentProvider/> was not found in component hierarchy.");
      return {
        getBundle: readable((id) => null)
      }
    }
    const { bundles } = ctx;
    return {
      getBundle: derived(bundles, $bundles => id => mapBundleSync($bundles, id)),
    };
  }
</script>

<script>
  import { setContext } from "svelte";
  import { readable } from "svelte/store";

  export let bundles = [];

  setContext(CONTEXT_KEY, {
    bundles: readable(bundles)
  });
</script>

<slot />
