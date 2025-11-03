<script>
	import { base } from '$app/paths'
	import Callout from '$lib/Callout.svelte'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import TutorialBasicMessageExample from '$lib/rendered-examples/TutorialBasicMessageExample.svelte'
	import TutorialInlineFormattingExample from '$lib/rendered-examples/TutorialInlineFormattingExample.svelte'
	import TutorialInterpolationExample from '$lib/rendered-examples/TutorialInterpolationExample.svelte'
	import TutorialAttributesSimpleExample from '$lib/rendered-examples/TutorialAttributesSimpleExample.svelte'
	import TutorialChangeWrapperExample from '$lib/rendered-examples/TutorialChangeWrapperExample.svelte'
	import TutorialLocalizeScriptExample from '$lib/rendered-examples/TutorialLocalizeScriptExample.svelte'
	import TutorialLocalizeDerivedExample from '$lib/rendered-examples/TutorialLocalizeDerivedExample.svelte'
</script>

# Tutorial

This tutorial will guide you through the fundamental concepts of `svelte-fluent` with practical examples.

## Render a simple message

The most basic use case is to render a simple, static piece of text. You can do this by passing the unique ID of your message to the `<Localized>` component.

<TutorialBasicMessageExample />

## Interpolate variables

You can insert variables into your translated text by using
[Fluent Placeables](https://projectfluent.org/fluent/guide/placeables.html).
Values for those variables are provided via the `args` prop of the <ReferenceLink name="Localized" /> component.

<TutorialInterpolationExample />

## Inline text formatting

When using the `<Localized>` component to render Fluent messages, `svelte-fluent` allows translators to use a safe subset of HTML tags for basic text-level formatting, such as `<strong>` and `<em>`. These tags will be rendered as HTML inside your component.

<TutorialInlineFormattingExample />

## Change wrapper element

By default, `<Localized>` renders a `<span>` element to wrap your translation. You can easily change this to any other HTML tag using the `tag` prop.

<TutorialChangeWrapperExample />

<Callout>

For more advanced use cases, such as adding your own attributes to the wrapper element,
please see the **[Custom Rendering]({base}/docs/advanced-features#custom-rendering)** section in our
advanced features guide.

</Callout>

## Localizable attributes

Fluent messages can have attributes, which are useful for providing extra information like `aria-label` or `title`. The `<Localized>` component automatically applies these to the wrapper element. For security, only safe attributes are allowed based on the `tag` prop. You can allow additional attributes using the `allowAttributes` prop.

<TutorialAttributesSimpleExample />

## Using translations in scripts

For cases where you need a translated string inside your `<script>` block, you can use the `useLocalize` helper. This is essential when interacting with third-party libraries or browser APIs that require strings as input, such as a toast notification library.

This example shows how to use `localize` to generate a dynamic message that is then passed to a notification function entirely within the script.

<TutorialLocalizeScriptExample />

### Reactive translations in scripts

The `localize` helper is reactive. To capture this reactivity in a variable within your `<script>` block, you must use `$derived`. Without it, the variable will only hold the initial translated value and will not update when the language changes.

In the example below, try switching languages to see how only the variable created with `$derived` updates.

<TutorialLocalizeDerivedExample />

### What’s next?

Congratulations\! You've now covered the core features of `svelte-fluent` and can handle the most common localization tasks.

When you're ready to tackle more complex scenarios, the library offers more powerful features. Our **[Advanced Features guide]({base}/docs/advanced)** is the perfect next step to learn about topics like:

- **Inserting HTML Elements and Svelte Components:** Seamlessly embed rich, interactive content directly inside your translations.
- **Formatting Interpolations:** Take control over how numbers, dates, and other variables are displayed.
- **Custom Functions:** Extend Fluent's capabilities with your own custom formatting logic for variables.
- **Custom Rendering:** Take full control over the final HTML output for complex use cases.

Check out the advanced guide to unlock the full potential of `svelte-fluent`.
