<script lang="ts">
	import { base } from '$app/paths'
</script>

# Getting started

## What is svelte-fluent?

`svelte-fluent` is a svelte component library that aims to make it effortless to localize applications using
the [Fluent](https://projectfluent.org/) localization system by Mozilla.

## Installation

Install `svelte-fluent` with your package manager of choice.

```
npm install --save-dev @nubolab-ffwd/svelte-fluent
npm install --save jsdom
```

## Configure bundler

`svelte-fluent` needs an additional bundler plugin to support server-side rendering (SSR) and [DOM Overlays]({base}/docs/components#overlay-experimental). Currently vite and rollup are supported.

### SvelteKit

vite.config.js

```js
import { sveltekit } from '@sveltejs/kit/vite';
import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), svelteFluent()]
};

export default config;
```

### Vite

vite.config.js

```js
import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [svelteFluent()]
};

export default config;
```

### Rollup / Sapper

rollup.config.js

```js
import svelteFluent from '@nubolab-ffwd/svelte-fluent/rollup-plugin';

export default {
	client: {
		plugins: [svelteFluent()]
	},
	server: {
		plugins: [svelteFluent({ ssr: true })]
	}
};
```
