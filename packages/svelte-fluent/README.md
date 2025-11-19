# Svelte Fluent [![Documentation](https://img.shields.io/badge/-Documentation-blue)](https://nubolab-ffwd.github.io/svelte-fluent/) [![svelte-fluent on npm](https://img.shields.io/npm/v/@nubolab-ffwd/svelte-fluent)](https://www.npmjs.com/package/@nubolab-ffwd/svelte-fluent) ![Tests](https://github.com/nubolab-ffwd/svelte-fluent/workflows/Tests/badge.svg) [![Svelte v5](https://img.shields.io/badge/svelte-v5-blueviolet?logo=svelte)](https://svelte.dev)

> [!IMPORTANT]
> This branch contains a **preview version** of `svelte-fluent` v2.
> If you're looking for the stable version, switch to the `main` branch.
>
> Check the [Version 2](https://svelte-fluent-v2-preview.netlify.app/docs/version-2/)
> page of the preview documentation site to get an overview of the changes.

`svelte-fluent` is a powerful localization library for
[Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/)
that enables you to integrate translations using Mozilla's natural-sounding Fluent syntax easily.

## Installation

```
npm install --save-dev @nubolab-ffwd/svelte-fluent@next
npm install --save jsdom
```

## Documentation

Documentation can be found at https://svelte-fluent-v2-preview.netlify.app/

## Example

```svelte
<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { Localized, setSvelteFluent, createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

	export let userName = 'Anna';
	export let collection = 'public';
	export let photoCount = 3;

	const translations = `
# Simple things are simple.
hello-user = Hello, {$userName}!

# Complex things are possible.
shared-photos =
    {$userName} {$photoCount ->
        [one] added a new photo
       *[other] added {$photoCount} new photos
    } to {$collection ->
        [public] the public stream
        [private] a private album
       *[other] the shared collection
    }.
`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	setSvelteFluent(() => createSvelteFluent([bundle]));
</script>

<strong><Localized id="hello-user" args={{ userName }} /></strong>
<p>
	<Localized id="shared-photos" args={{ userName, collection, photoCount }} />
</p>
```
