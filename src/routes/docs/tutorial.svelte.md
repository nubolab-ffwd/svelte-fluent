---
title: Tutorial
---

<script>
	import Example from './_Example.svelte'
</script>

# {title}

## First steps

You need to provide your translations to svelte-fluent by adding the `FluentProvider` component in your component hierarchy.

In the most basic setup those translations can be defined directly in the code like this:

<Example name='tutorial/first-steps/App.svelte' />

## Load translations from files

Managing translations directly in the code can get messy.
A better way is to load translations from `.ftl` files which are easier to work with:

> The bundler must support importing the `.ftl` files as strings. For rollup this can be achived by
> adding the [rollup-plugin-string](https://www.npmjs.com/package/rollup-plugin-string) plugin to your
> Rollup configuration. For vite you can add `?raw` to your import like in the example below.

<Example name='tutorial/translation-files/App.svelte' extras={['en.ftl']} />

## Multiple languages and language selection

The previous examples only used a single language for simplicity. The next example
shows how to extend this to multiple languages and selecting the translation
based on your users' browser preferences.

> This example will fail when used with server-side rendering (SSR) because during
> SSR the component cannot use browser-only globals like `navigator.languages`.
>
> As an alternative that works in SSR you can parse the
> [HTTP Accept-Language header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language)
> and replace `navigator.languages` with the resulting list of locale identifiers.

<Example name='tutorial/multi-language/App.svelte' extras={['en.ftl', 'fr.ftl', 'de.ftl']} />

## Language override

Many applications also wish to provide their users with a way to override the
auto-detected language. This can be accomplished by modifying the bundles passed
to `FluentProvider` based on user settings.

<Example name='tutorial/language-override/App.svelte' extras={['en.ftl', 'fr.ftl', 'de.ftl']} />

## Translations with interpolation

You can insert variable into your translated text by using
[Fluent Placeables](https://projectfluent.org/fluent/guide/placeables.html).
Values for those variables are provided via the `args` prop of the `Localized` and `Overlay` components.

<Example name='tutorial/interpolation/App.svelte' extras={['en.ftl']} />

## Customizing interpolation formatting

By default Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html).

Formatting parameters listed in "Parameters" in the
[Fluent Functions](https://projectfluent.org/fluent/guide/functions.html) documentation can be set both in the `.ftl`
files or in the JS source. Parameters listed in "Developer parameters" can only be set in JS code.

<Example name='tutorial/interpolation-formatting/App.svelte' extras={['en.ftl']} />

## Custom formatting functions

You can extend the default [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html)
with custom formatting functions by adding them to the "functions" option of `FluentBundle`.

<Example name='tutorial/interpolation-custom-functions/App.svelte' extras={['en.ftl']} />
