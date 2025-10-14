<script>
	import { base } from '$app/paths'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import {
		TutorialFirstStepsExample,
		TutorialAttributesSimpleExample,
		TutorialAttributesComplexExample,
		TutorialChangeWrapperExample,
		TutorialInterpolationExample,
		TutorialInterpolationFormattingExample,
		TutorialMultiLanguageExample,
		TutorialTranslationFilesExample
	} from '$lib/rendered-examples';
</script>

# Tutorial

This tutorial will guide you through the fundamental concepts of `svelte-fluent`. Starting with the basics of setting up your project and displaying your first translation, you will learn how to handle multiple languages, variables, and advanced value formatting.

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

## Customize wrapper element

By default, `<Localized>` renders a `<span>` element to wrap your translation. You can easily change this to any other HTML tag using the `tag` prop.

<TutorialChangeWrapperExample />

## Localizable attributes

Fluent messages can have attributes, which are useful for providing extra information like `aria-label` or `title`. The `<Localized>` component can automatically apply these to the wrapper element. For security, only safe attributes are allowed based on the `tag` prop. You can allow additional attributes using the `allowAttributes` prop.

<TutorialAttributesSimpleExample />

### Advanced customization with the `children` snippet

For full control over the output, you can use the `children` snippet. The snippet receives two arguments:

- `attributes`: A record containing the attributes from the Fluent message.
- `translatedContent`: A snippet that renders the translated text.

This pattern is ideal for advanced cases where you need to render a specific element, like an `<input>`, and apply localized attributes to it. By using the `children` snippet, you can take complete control over the final HTML while still sourcing attributes from your translation files.

It's important to note that the `attributes` passed to the snippet are still filtered based on the security rules of the `tag` and `allowAttributes` props to prevent unwanted attributes from being passed through.

<TutorialAttributesComplexExample />

## Interpolate variables

You can insert variables into your translated text by using
[Fluent Placeables](https://projectfluent.org/fluent/guide/placeables.html).
Values for those variables are provided via the `args` prop of the <ReferenceLink name="Localized" /> component.

<TutorialInterpolationExample />

---

Congratulations\! You've now covered the core features of `svelte-fluent` and can handle the most common localization tasks.

When you're ready to tackle more complex scenarios, the library offers more powerful features. Our **[Advanced Features guide]({base}/docs/advanced)** is the perfect next step to learn about topics like:

- **Svelte Component Injection:** Seamlessly embed your own interactive Svelte components directly inside your translations.
  **Formatting Interpolations:** Take control over how numbers, dates, and other variables are displayed.
- **Custom Functions:** Extend Fluent's capabilities with your own custom formatting logic for variables.

Check out the advanced guide to unlock the full potential of `svelte-fluent`.
