---
title: Generic Svelte
---

<script lang="ts">
	import { base } from '$app/paths'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import {
		TutorialFirstStepsExample,
		TutorialTranslationFilesExample,
		TutorialMultiLanguageExample
	} from '$lib/rendered-examples';
</script>

# {title}

This guide covers how to set up `svelte-fluent` in a generic Svelte project, for example one created with `npm create vite@latest` and the Svelte template.

> This guide assumes you have already created a Svelte project and installed `svelte-fluent` and its dependencies as shown on the **[Getting Started]({base}/docs/getting-started#installation)** page.

## Configure bundler

**This step is optional**, but recommended for a better developer experience.

You can add the `svelte-fluent` plugin to your bundler configuration. Currently vite and rollup are supported.

The plugin allows you to import `.ftl` files directly, providing you a `FluentResource` instance instead of having to construct your own from a string imported via Vite's `?raw` syntax.

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

## First steps

You need to provide your translations to `svelte-fluent` by creating a <ReferenceLink name="SvelteFluent" /> object and initializing the context.

In the most basic setup, translations can be defined directly in the code like this:

<TutorialFirstStepsExample />

## Load translations from files

Managing translations directly in the code can get messy. A better way is to load translations from `.ftl` files.

<TutorialTranslationFilesExample />

## Multiple languages

We can now extend this to multiple languages. Let's add a selection for the desired language and fallback to the auto-detected language of the browser.

> **Server-Side Rendering (SSR):** This example uses the browser's `navigator.languages` API, which is not available on the server.
> For SSR, you should instead parse the `Accept-Language` HTTP header to determine the user's locale.

<TutorialMultiLanguageExample />

## What's next?

You now have a solid foundation for using `svelte-fluent` in a client-side Svelte project.

You can learn more about how to use `svelte-fluent` in the [Tutorial]({base}/docs/tutorial),
explore more powerful features in the [Advanced Features guide]({base}/docs/advanced),
or check out the [Reference]({base}/docs/reference) for API documentation.
