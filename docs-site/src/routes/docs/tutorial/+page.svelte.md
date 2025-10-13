<script>
	import { base } from '$app/paths'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import {
		TutorialFirstStepsExample,
		TutorialAttributesExample,
		TutorialChangeWrapperExample,
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
> Check out the [SvelteKit framework guide]({base}/docs/frameworks#sveltekit) for an example how to do this.

<TutorialMultiLanguageExample />

### Changing the wrapper element

By default, `<Localized>` renders a `<span>` element to wrap your translation. You can easily change this to any other HTML tag using the `tag` prop.

<TutorialChangeWrapperExample />

## Localizable Attributes

Fluent messages can have attributes, which are useful for providing extra information like `aria-label` or `title` for an element. In `svelte-fluent`, these attributes are automatically applied to the wrapper element rendered by the `<Localized>` component.

<TutorialAttributesExample />

## Interpolation

You can insert variables into your translated text by using
[Fluent Placeables](https://projectfluent.org/fluent/guide/placeables.html).
Values for those variables are provided via the `args` prop of the <ReferenceLink name="Localized" /> component.

<TutorialInterpolationExample />

## Interpolation formatting

Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html).

Formatting parameters listed in "Parameters" in the
[Fluent Functions](https://projectfluent.org/fluent/guide/functions.html) documentation can be set both in the `.ftl`
files or in the JS source.

Parameters listed in "Developer parameters" can only be set in JS code.

<TutorialInterpolationFormattingExample />

---

Congratulations\! You've now covered the core features of `svelte-fluent` and can handle the most common localization tasks.

When you're ready to tackle more complex scenarios, the library offers more powerful features. Our **[Advanced Features guide]({base}/docs/advanced)** is the perfect next step to learn about topics like:

- **Svelte Component Injection:** Seamlessly embed your own interactive Svelte components directly inside your translations.
- **Custom Functions:** Extend Fluent's capabilities with your own custom formatting logic for variables.

Check out the advanced guide to unlock the full potential of `svelte-fluent`.
