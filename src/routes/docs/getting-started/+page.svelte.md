<script lang="ts">
	import { base } from '$app/paths'
	import Example from '$site/examples/frontpage/Example.svelte';
</script>

# Getting started

## What is svelte-fluent?

`svelte-fluent` is a svelte component library that aims to make it effortless to localize applications using
the [Fluent](https://projectfluent.org/) localization system by Mozilla.

### Example

<Example />

## Installation

> Using SvelteKit? Check out the [SvelteKit integration guide]({base}/docs/integration#sveltekit)!

Install `svelte-fluent` with your package manager of choice.

```
npm install --save-dev @nubolab-ffwd/svelte-fluent@next
npm install --save jsdom
```

## Configure bundler

You need to add the `svelte-fluent` plugin to your bundler configuration for all features to work.
Currently vite and rollup are supported.

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

### Rollup / Sapper

rollup.config.js

```js
import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup';

export default {
	client: {
		plugins: [svelteFluent()]
	},
	server: {
		plugins: [svelteFluent({ ssr: true })]
	}
};
```
