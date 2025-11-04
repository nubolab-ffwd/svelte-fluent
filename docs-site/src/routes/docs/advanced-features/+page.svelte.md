<script>
	import { base } from '$app/paths'
	import Callout from '$lib/Callout.svelte'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import AdvancedInsertElementExample from '$lib/rendered-examples/AdvancedInsertElementExample.svelte'
	import AdvancedInsertElementAttributesExample from '$lib/rendered-examples/AdvancedInsertElementAttributesExample.svelte'
	import AdvancedInsertComponentSimpleExample from '$lib/rendered-examples/AdvancedInsertComponentSimpleExample.svelte'
	import AdvancedInsertComponentComplexExample from '$lib/rendered-examples/AdvancedInsertComponentComplexExample.svelte'
	import AdvancedInterpolationFormattingExample from '$lib/rendered-examples/AdvancedInterpolationFormattingExample.svelte'
	import AdvancedCustomFunctionsExample from '$lib/rendered-examples/AdvancedCustomFunctionsExample.svelte'
	import AdvancedOverrideChildrenExample from '$lib/rendered-examples/AdvancedOverrideChildrenExample.svelte'
</script>

# Advanced features

This page covers some of the more advanced features of `svelte-fluent`. While not necessary for every project, these tools provide powerful ways to handle complex localization scenarios, create richer interactive content, and extend the library to fit your specific needs.

It is recommended to have completed the main [tutorial]({base}/docs/tutorial) before diving into these topics.

## Insert HTML Elements

You can securely insert HTML elements into your translations using the `elements` prop on the `<Localized>` component. This is the modern replacement for the old `<Overlay>` component and is useful for adding things like links or emphasis tags to your messages.

To do this, use the `TagElement` class, which allows you to define the tag name and its attributes in a type-safe way.

<AdvancedInsertElementExample />

### Combining Attributes from Component and Translation

A powerful pattern is to combine attributes set in your component with attributes defined directly in your Fluent message. `svelte-fluent` will merge them, with attributes from the `.ftl` file taking precedence.

In the example below, the `href` is set in the component's `TagElement`, while the `rel` and `target` attributes are provided by the translator in the `.ftl` file.

<Callout type="warning" title="Security Note">

You should carefully consider which attributes your translators should control. Directly mapping translator-controlled values to potentially dangerous attributes can create security vulnerabilities.

- **Security (XSS):** Avoid allowing attributes like `style` or event handlers (`onclick`), as this could allow for Cross-Site Scripting (XSS) attacks.
- **Privacy:** Be cautious with attributes like `src` on images or the `rel` attribute on links. Allowing a translator to change these could enable them to insert tracking pixels or compromise user privacy.

</Callout>

<AdvancedInsertElementAttributesExample />

## Insert Svelte Component

One of the most powerful features of `svelte-fluent` is the ability to inject your own Svelte components directly into your translations. This allows for rich, interactive content that can still be positioned and controlled by your translators.

### Simple Injection

The most straightforward use case is injecting a simple component, like an icon, without any props.

You configure your components using the `elements` prop of the <ReferenceLink name="Localized" /> component. Use the `ComponentElement` class to wrap your Svelte component.

<AdvancedInsertComponentSimpleExample />

### Passing Props to Components

You can also pass props to your injected components. This can be done by providing default values in your `ComponentElement` configuration, or dynamically by passing a function that maps attributes from your Fluent message to component props.

In this example, we define an `Outline` component. The `ComponentElement` is configured with a function that takes the attributes from the `<fluent-component>` tag in the translation and passes them as props to the `Outline` component. This allows the translator to control the component's props directly from the `.ftl` file.

<Callout type="warning" title="Security Note">

You should always be careful how attributes from a translation are used in your components. Directly mapping translator-controlled values to potentially dangerous props can create security vulnerabilities.

- **Security (XSS):** Avoid mapping attributes directly to `style` props or event handlers (`onclick`), as this could allow for Cross-Site Scripting (XSS) attacks.
- **Privacy:** Be cautious with attributes like `src` on images or scripts. Allowing a translator to change a `src` attribute could enable them to insert tracking pixels or malicious scripts, potentially compromising user privacy and data.

</Callout>

<AdvancedInsertComponentComplexExample />

## Formatting interpolations

Fluent outputs interpolations in a human readable format appropriate to the currently used locale.
You can customize the formatting by using [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html).

Formatting parameters listed in "Parameters" in the
[Fluent Functions](https://projectfluent.org/fluent/guide/functions.html) documentation can be set both in the `.ftl`
files or in the JS source.

Parameters listed in "Developer parameters" can only be set in JS code.

<AdvancedInterpolationFormattingExample />

## Custom Functions

You can extend the default [Fluent Functions](https://projectfluent.org/fluent/guide/functions.html)
with custom formatting functions by adding them to the `functions` option of `FluentBundle`.

You can also check out the
[code of the built-in Fluent Functions](https://github.com/projectfluent/fluent.js/blob/master/fluent-bundle/src/builtins.ts)
for more examples.

<AdvancedCustomFunctionsExample />

## Custom Rendering

For full control over the output, you can use the `children` snippet. The snippet receives two arguments:

- `attributes`: A record containing the attributes from the Fluent message.
- `translatedContent`: A snippet that renders the translated text.

This pattern is ideal for advanced cases where you need to render a specific element, like an `<input>`, and apply localized attributes to it. By using the `children` snippet, you can take complete control over the final HTML while still sourcing attributes from your translation files.

It's important to note that the `attributes` passed to the snippet are still filtered based on the security rules of the `tag` and `allowAttributes` props to prevent unwanted attributes from being passed through.

<AdvancedOverrideChildrenExample />
