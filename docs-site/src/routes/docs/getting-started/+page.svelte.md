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

Install `svelte-fluent` and its peer dependency `jsdom` with your package manager of choice.

```sh
npm install --save-dev @nubolab-ffwd/svelte-fluent
npm install --save jsdom
```

> **Note:** The `jsdom` dependency is used for the server-side rendering of the `<Localized>` component. It will not increase your frontend bundle size.

### Next Steps: Integration Guides

Now that you have the library installed, the next step is to integrate it into your project. Please follow the guide that matches your setup:

- **[SvelteKit Guide →]({base}/docs/frameworks#sveltekit):** A comprehensive, step-by-step guide for SvelteKit projects, covering server-side rendering and language negotiation. **This is the recommended path for most users.**
- **[Generic Svelte Setup →]({base}/docs/frameworks#generic-svelte):** For projects using Svelte with Vite directly, or other bundlers.

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
