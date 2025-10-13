<script lang="ts">
	import { base } from '$app/paths'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import { FrontpageExample } from '$lib/rendered-examples';
</script>

# Getting started

## What is svelte-fluent?

`svelte-fluent` is a svelte component library that aims to make it effortless to localize applications using
the [Fluent](https://projectfluent.org/) localization system by Mozilla.

### Example

<FrontpageExample />

## Installation

> Using SvelteKit? Check out the [SvelteKit framework guide]({base}/docs/frameworks#sveltekit)!

Install `svelte-fluent` with your package manager of choice.

```
npm install --save-dev @nubolab-ffwd/svelte-fluent
npm install --save jsdom
```

| Note: the `jsdom` dependency is used for the server-side rendering of the <ReferenceLink name="Localized" /> component. It will not increase your frontend bundle size.

## Configure bundler

**This step is optional**, but recommended for a better developer experience.

You can add the `svelte-fluent` plugin to your bundler configuration. Currently vite and rollup are supported.

The plugin allows you to import `.ftl` files directly, providing you a `FluentResource` instance instead of having to construct your own from a string imported via Vite's `?raw` syntax.

### SvelteKit

vite.config.js

```js
import { sveltekit } from '@sveltejs/kit/vite';
import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [svelteFluent(), sveltekit()]
};

export default config;
```

### Vite

vite.config.js

```js
import svelteFluent from '@nubolab-ffwd/svelte-fluent/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [svelteFluent()]
};

export default config;
```

### Rollup

rollup.config.js

```js
import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup';

export default {
	plugins: [svelteFluent()]
};
```
