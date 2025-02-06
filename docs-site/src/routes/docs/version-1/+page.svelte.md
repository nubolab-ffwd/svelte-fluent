<script lang="ts">
	import { base } from '$app/paths'
	import ReferenceLink from '$site/ReferenceLink.svelte'
</script>

# Version 1

## What's new?

### Svelte 5 support

Svelte 5 is now fully supported by `svelte-fluent`.

### Server-side localizations

In previous versions, `svelte-fluent` could only be used inside of components. With the introduction
of the <ReferenceLink name="SvelteFluent" /> object in version 1, you can now use `svelte-fluent` anywhere you want.

For an example how to integrate it with SvelteKit `.server.js` files and form actions, check out the
[SvelteKit integration guide]({base}/docs/integration#sveltekit).

### Loading .ftl files

The bundler plugin of `svelte-fluent` now allows you to directly import your `.ftl` files.
Previous versions relied on loading the `.ftl` files as raw strings either via vite's `?raw` import or
adding `rollup-plugin-string`.

## Breaking changes

- Svelte-fluent now requires svelte 5
- The `$localized` store was removed
- The <ReferenceLink name="FluentProvider" /> component is now considered deprecated and will be removed in a later release
- The <ReferenceLink name="Localized" /> and <ReferenceLink name="Overlay" /> components now use svelte snippets.
  For usage with slots, svelte-fluent provides [legacy wrappers]({base}/docs/legacy)
- The import path for the rollup/vite plugins changed to `@nubolab-ffwd/svelte-fluent/rollup` and `@nubolab-ffwd/svelte-fluent/vite`.

## Migration Guide

### $localized store

As a replacement to the `$localized` store, `svelte-fluent` provides the `localize` function as part of the <ReferenceLink name="FluentContext" />.

**Before**

```svelte
<script>
	import { localize } from '@nubolab-ffwd/svelte-fluent';
</script>

<button onclick={() => window.alert($localize('hello'))}>Say hello</button>
```

**After**

```svelte
<script>
	import { getFluentContext } from '@nubolab-ffwd/svelte-fluent';
	const { localize } = getFluentContext();
</script>

<button onclick={() => window.alert(localize('hello'))}>Say hello</button>
```

### FluentProvider deprecation

Replace the <ReferenceLink name="FluentProvider" /> component with <ReferenceLink name="createSvelteFluent" /> and <ReferenceLink name="initFluentContext" />.

**Before**

```svelte
<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = 'hello = Hello, world!';
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
</script>

<FluentProvider bundles={[bundle]}>
	<Localized id="hello" />
</FluentProvider>
```

**After**

```svelte
<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = 'hello = Hello, world!';
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<Localized id="hello" />
```

### Replace Localize/Overlay slots with snippets

Slots are deprecated in Svelte 5 and all svelte-fluent components now use snippets instead.
If you want to start using snippets with svelte-fluent, you need do some simple changes:

**Before**

```svelte
<Localized id="hello" let:text let:attrs>
	Custom rendering with {text} and {attrs}.
</Localized>
```

**After**

```svelte
<Localized id="hello">
	{#snippet children({ text, attrs })}
		Custom rendering with {text} and {attrs}.
	{/snippet}
</Localized>
```

### Continue using Localize/Overlay components with slots

In case you're not ready to migrate to snippets, svelte-fluent offers compatibility
components that allow you to continue using slots as before.
To use those components you need to update your imports.

```diff
 <script>
-    import { Localized } from '@nubolab-ffwd/svelte-fluent';
+    import { Localized } from '@nubolab-ffwd/svelte-fluent/legacy';
 </script>

 <Localized id="hello" let:text let:attrs>
     Custom rendering with {text} and {attrs}.
 </Localized>
```

### vite/rollup plugin import paths

vite.config.js

```diff
-import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';
+import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';

 /** @type {import('vite').UserConfig} */
 const config = {
     plugins: [svelteFluent()]
 };

 export default config;
```

rollup.config.js

```diff
-import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';
+import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup';

 export default {
     client: {
         plugins: [svelteFluent()]
     },
     server: {
         plugins: [svelteFluent({ ssr: true })]
     }
 };
```

### Ftl file loading

Since `svelte-fluent` now handles importing `.ftl` files directly, you can simplify your translation loading code.

**Before**

```svelte
<script>
	import translationsEn from './en.ftl?raw';

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);
</script>
```

**After**

```svelte
<script>
	import resourceEn from './en.ftl';

	const bundle = new FluentBundle('en');
	bundle.addResource(resourceEn);
</script>
```
