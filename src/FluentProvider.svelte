<script context="module">
  import { getContext } from "svelte";
  import { mapBundleSync } from "@fluent/sequence";

  const CONTEXT_KEY = {};
  export function getBundle(id) {
    const { bundles } = getContext(CONTEXT_KEY);
    return derived(bundles, $bundles => mapBundleSync(bundles, id));
  }
  export function formatString(id, args) {
    const bundle = getBundle(id);
    return derived(bundle, $bundle => {
      if ($bundle === null) {
        return id;
      }
      const msg = $bundle.getMessage(id);
      return $bundle.formatPattern(msg, args);
    });
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
