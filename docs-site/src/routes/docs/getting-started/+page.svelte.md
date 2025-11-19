<script lang="ts">
	import { base } from '$app/paths'
	import Callout from '$lib/Callout.svelte'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import FrontpageExample from '$lib/rendered-examples/FrontpageExample.svelte';
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
npm install --save-dev @nubolab-ffwd/svelte-fluent@next
npm install --save jsdom
```

<Callout>

The `jsdom` dependency is used for the server-side rendering of the `<Localized>` component. It will not increase your frontend bundle size.

</Callout>

### Next Steps: Integration Guides

Now that you have the library installed, the next step is to integrate it into your project. Please follow the guide that matches your setup:

- **[SvelteKit Guide →]({base}/docs/frameworks/sveltekit):** A comprehensive, step-by-step guide for SvelteKit projects, covering server-side rendering and language negotiation. **This is the recommended path for most users.**
- **[Generic Svelte Setup →]({base}/docs/frameworks/generic-svelte):** For projects using Svelte with Vite directly, or other bundlers.
