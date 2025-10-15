<script>
	import { base } from '$app/paths'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import TutorialComponentInjectionSimpleExample from '$lib/rendered-examples/TutorialComponentInjectionSimpleExample.svelte'
	import TutorialComponentInjectionComplexExample from '$lib/rendered-examples/TutorialComponentInjectionComplexExample.svelte'
	import TutorialInterpolationFormattingExample from '$lib/rendered-examples/TutorialInterpolationFormattingExample.svelte'
	import TutorialInterpolationCustomFunctionsExample from '$lib/rendered-examples/TutorialInterpolationCustomFunctionsExample.svelte'
</script>

# Advanced features

This page covers some of the more advanced features of `svelte-fluent`. While not necessary for every project, these tools provide powerful ways to handle complex localization scenarios, create richer interactive content, and extend the library to fit your specific needs. It is recommended to have completed the main [tutorial]({base}/docs/tutorial) before diving into these topics.

## Svelte Component Injection

One of the most powerful features of `svelte-fluent` is the ability to inject your own Svelte components directly into your translations. This allows for rich, interactive content that can still be positioned and controlled by your translators.

### Simple Injection

The most straightforward use case is injecting a simple component, like an icon, without any props.

You configure your components using the `elements` prop of the <ReferenceLink name="Localized" /> component. Use the <ReferenceLink name="ComponentElement" /> class to wrap your Svelte component.

<TutorialComponentInjectionSimpleExample />

### Passing Props to Components

You can also pass props to your injected components. This can be done by providing default values in your `ComponentElement` configuration, or dynamically by passing a function that maps attributes from your Fluent message to component props.

In this example, we define an `Outline` component. The `ComponentElement` is configured with a function that takes the attributes from the `<fluent-component>` tag in the translation and passes them as props to the `Outline` component. This allows the translator to control the component's props directly from the `.ftl` file.

> **Security Note:** This feature is very powerful and requires careful implementation. As a developer, you should always control how attributes from a translation are used in your components. Directly mapping translator-controlled values to potentially dangerous props can create security vulnerabilities. This is especially critical if your translations originate from a less trusted source, like an online translation platform, but the principle of validating and sanitizing inputs applies in all cases.
>
> - **Security (XSS):** Avoid mapping attributes directly to `style` props or event handlers (`onclick`), as this could allow for Cross-Site Scripting (XSS) attacks.
> - **Privacy:** Be cautious with attributes like `src` on images or scripts. Allowing a translator to change a `src` attribute could enable them to insert tracking pixels or malicious scripts, potentially compromising user privacy and data.

<TutorialComponentInjectionComplexExample />

## Formatting interpolations

Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html).

Formatting parameters listed in "Parameters" in the
[Fluent Functions](https://projectfluent.org/fluent/guide/functions.html) documentation can be set both in the `.ftl`
files or in the JS source.

Parameters listed in "Developer parameters" can only be set in JS code.

<TutorialInterpolationFormattingExample />

## Custom Functions

You can extend the default [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html)
with custom formatting functions by adding them to the `functions` option of `FluentBundle`.

You can also check out the
[code of the built-in Fluent Functions](https://github.com/projectfluent/fluent.js/blob/master/fluent-bundle/src/builtins.ts)
for more examples.

<TutorialInterpolationCustomFunctionsExample />
