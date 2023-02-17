<script>
	import ExampleFirstSteps from '$site/examples/tutorial/first-steps/Example.svelte'
	import ExampleTranslationFiles from '$site/examples/tutorial/translation-files/Example.svelte'
	import ExampleMultiLanguage from '$site/examples/tutorial/multi-language/Example.svelte'
	import ExampleInterpolation from '$site/examples/tutorial/interpolation/Example.svelte'
	import ExampleInterpolationFormatting from '$site/examples/tutorial/interpolation-formatting/Example.svelte'
	import ExampleInterpolationCustomFunctions from '$site/examples/tutorial/interpolation-custom-functions/Example.svelte'
</script>

# Tutorial

## First steps

You need to provide your translations to `svelte-fluent` by adding the `FluentProvider` component in your component hierarchy.

In the most basic setup those translations can be defined directly in the code like this:

<ExampleFirstSteps />

## Load translations from files

Managing translations directly in the code can get messy.
A better way is to load translations from `.ftl` files.

> The bundler must support importing `.ftl` files as strings:
>
> - For [Vite](https://vitejs.dev/) you can add `?raw` to your import like in the example below.
> - For [Rollup](https://rollupjs.org/) you can add [rollup-plugin-string](https://www.npmjs.com/package/rollup-plugin-string)
>   to your configuration.

<ExampleTranslationFiles />

## Multiple languages

With the basics in place we can now extend this to multiple languages.
This example shows selection of the desired language and provides a fallback to
the auto-detected language from the browser.

> This example will fail when used with server-side rendering (SSR) because during
> SSR the component cannot use browser-only globals like `navigator.languages`.
>
> As an alternative that works in SSR you can parse the
> [HTTP Accept-Language header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)
> and replace `navigator.languages` with the resulting list of locale identifiers.

<ExampleMultiLanguage />

## Interpolation

You can insert variables into your translated text by using
[Fluent Placeables](https://projectfluent.org/fluent/guide/placeables.html).
Values for those variables are provided via the `args` prop of the `Localized` and `Overlay` components.

<ExampleInterpolation />

## Interpolation formatting

Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html).

Formatting parameters listed in "Parameters" in the
[Fluent Functions](https://projectfluent.org/fluent/guide/functions.html) documentation can be set both in the `.ftl`
files or in the JS source.

Parameters listed in "Developer parameters" can only be set in JS code.

<ExampleInterpolationFormatting />

## Custom functions

You can extend the default [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html)
with custom formatting functions by adding them to the `functions` option of `FluentBundle`.

You can also check out the
[code of the built-in Fluent Functions](https://github.com/projectfluent/fluent.js/blob/master/fluent-bundle/src/builtins.ts)
for more examples.

<ExampleInterpolationCustomFunctions />
