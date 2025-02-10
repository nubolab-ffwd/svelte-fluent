<script>
	import { base } from '$app/paths'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import {
		TutorialFirstStepsExample,
		TutorialInterpolationCustomFunctionsExample,
		TutorialInterpolationExample,
		TutorialInterpolationFormattingExample,
		TutorialMultiLanguageExample,
		TutorialTranslationFilesExample
	} from '$lib/rendered-examples';
</script>

# Tutorial

## First steps

You need to provide your translations to `svelte-fluent` by creating a <ReferenceLink name="SvelteFluent" /> object
and initializing the <ReferenceLink name="FluentContext" />.

In the most basic setup those translations can be defined directly in the code like this:

<TutorialFirstStepsExample />

## Load translations from files

Managing translations directly in the code can get messy.
A better way is to load translations from `.ftl` files.

<TutorialTranslationFilesExample />

## Multiple languages

We can now extend this to multiple languages. Let's add a selection for the
desired language and fallback to the auto-detected language of the browser.

> This example will fail when used with server-side rendering (SSR) because during
> SSR the component cannot use browser-only globals like `navigator.languages`.
>
> As an alternative that works in SSR you can parse the
> [HTTP Accept-Language header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)
> and replace `navigator.languages` with the resulting list of locale identifiers.
>
> Check out the [SvelteKit integration guide]({base}/docs/integration#sveltekit) for an example how to do this.

<TutorialMultiLanguageExample />

## Interpolation

You can insert variables into your translated text by using
[Fluent Placeables](https://projectfluent.org/fluent/guide/placeables.html).
Values for those variables are provided via the `args` prop of the <ReferenceLink name="Localized" /> and <ReferenceLink name="Overlay" /> components.

<TutorialInterpolationExample />

## Interpolation formatting

Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html).

Formatting parameters listed in "Parameters" in the
[Fluent Functions](https://projectfluent.org/fluent/guide/functions.html) documentation can be set both in the `.ftl`
files or in the JS source.

Parameters listed in "Developer parameters" can only be set in JS code.

<TutorialInterpolationFormattingExample />

## Custom functions

You can extend the default [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html)
with custom formatting functions by adding them to the `functions` option of `FluentBundle`.

You can also check out the
[code of the built-in Fluent Functions](https://github.com/projectfluent/fluent.js/blob/master/fluent-bundle/src/builtins.ts)
for more examples.

<TutorialInterpolationCustomFunctionsExample />
