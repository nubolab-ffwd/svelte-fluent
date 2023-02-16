# Svelte Fluent [![Documentation](https://img.shields.io/badge/-Documentation-blue)](https://nubolab-ffwd.github.io/svelte-fluent/) [![npm (scoped)](https://img.shields.io/npm/v/@nubolab-ffwd/svelte-fluent)](https://www.npmjs.com/package/@nubolab-ffwd/svelte-fluent) ![CI](https://github.com/nubolab-ffwd/svelte-fluent/workflows/CI/badge.svg) [![svelte-v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

`svelte-fluent` is a powerful localization library for
[Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/)
that enables you to integrate translations using Mozilla's natural-sounding Fluent syntax easily.

## Installation

```
npm install --save-dev @nubolab-ffwd/svelte-fluent
npm install --save jsdom
```

## Documentation

Documentation can be found at https://nubolab-ffwd.github.io/svelte-fluent/

## Example

```svelte
<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

	export let userName = 'Anna';
	export let userGender = 'female';
	export let photoCount = 3;

	const translations = `
# Simple things are simple.
hello-user = Hello, {$userName}!

# Complex things are possible.
shared-photos =
    {$userName} {$photoCount ->
        [one] added a new photo
       *[other] added {$photoCount} new photos
    } to {$userGender ->
        [male] his stream
        [female] her stream
       *[other] their stream
    }.
`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
</script>

<FluentProvider bundles={[bundle]}>
	<strong><Localized id="hello-user" args={{ userName }} /></strong>
	<p>
		<Localized id="shared-photos" args={{ userName, userGender, photoCount }} />
	</p>
</FluentProvider>
```
