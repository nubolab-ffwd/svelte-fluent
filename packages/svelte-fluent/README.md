# Svelte Fluent [![Documentation](https://img.shields.io/badge/-Documentation-blue)](https://nubolab-ffwd.github.io/svelte-fluent/) [![svelte-fluent on npm](https://img.shields.io/npm/v/@nubolab-ffwd/svelte-fluent)](https://www.npmjs.com/package/@nubolab-ffwd/svelte-fluent) ![Tests](https://github.com/nubolab-ffwd/svelte-fluent/workflows/Tests/badge.svg) [![Svelte v5](https://img.shields.io/badge/svelte-v5-blueviolet?logo=svelte)](https://svelte.dev)

`svelte-fluent` is a powerful localization library for
[Svelte](https://svelte.dev/) and [SvelteKit](https://kit.svelte.dev/)
that enables you to integrate translations using Mozilla's natural-sounding Fluent syntax easily.

## Upcoming v2 Release

We are working on the next major release which we aim to release in the beginning of 2026.

- **Preview:** Try the new API in the [`next`](https://github.com/nubolab-ffwd/svelte-fluent/tree/next) branch.
- **Changes:** Expect breaking changes as we streamline the API and adopt Svelte 5 runes.
- **Feedback:** Please report issues or share your thoughts on GitHub.

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
	import { Localized, initFluentContext, createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

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

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<strong><Localized id="hello-user" args={{ userName }} /></strong>
<p>
	<Localized id="shared-photos" args={{ userName, userGender, photoCount }} />
</p>
```
