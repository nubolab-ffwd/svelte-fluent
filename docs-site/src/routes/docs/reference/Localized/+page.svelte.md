---
title: Localized
---

<script>
	import { base } from '$app/paths'
	import Callout from '$lib/Callout.svelte'
	import PropDescription from '$lib/PropDescription.svelte'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import LocalizedDynamicTextExample from '$lib/rendered-examples/LocalizedDynamicTextExample.svelte'
	import LocalizedStaticTextExample from '$lib/rendered-examples/LocalizedStaticTextExample.svelte'
	import AdvancedInsertElementExample from '$lib/rendered-examples/AdvancedInsertElementExample.svelte'
	import AdvancedInsertComponentSimpleExample from '$lib/rendered-examples/AdvancedInsertComponentSimpleExample.svelte'
</script>

# {title}

The `<Localized>` component renders a Fluent message and outputs it as DOM element.

## Props

<PropDescription name="id" type="string" required>

The unique identifier of the Fluent message.

</PropDescription>

---

<PropDescription name="args" type="Record<string, FluentVariable>">

Arguments for interpolation within the Fluent message.

</PropDescription>

---

<PropDescription name="tag" type="string" default="'span'">

The HTML tag name to use as a wrapper element for the translation.

</PropDescription>

---

<PropDescription name="allowAttributes" type="string[]">

An explicit list of attribute names from the Fluent message that should be allowed to be applied to the wrapper element. By default, only a safe-list (e.g., `title`, `aria-label`) is allowed based on the `tag`. This prop allows you to explicitly permit additional attributes.

</PropDescription>

---

<PropDescription name="elements" type="Record<string, TagElement | ComponentElement>">

A configuration object for securely injecting HTML elements (using `TagElement`) or Svelte components (using `ComponentElement`) into placeholders within the Fluent message.

See the [Configuring the `elements` Prop](#configuring-the-elements-prop) section below for details.

</PropDescription>

---

<PropDescription name="children" type="Snippet">

The `children` snippet allows for full control over the output.

</PropDescription>

---

## Configuring the `elements` Prop

The `elements` prop allows you to insert rich content into your translations. You configure it using the `TagElement` and `ComponentElement` classes.

### Using `TagElement`

The `TagElement` class is used to securely insert standard HTML elements into a translation. This allows you to define interactive elements like anchors (`<a>`) in your code, while letting translators control the surrounding text.

<AdvancedInsertElementExample />

<Callout>

For more detailed examples, see the **[Insert HTML Elements]({base}/docs/advanced-features#insert-html-elements)** section in our advanced features guide.

</Callout>

### Using `ComponentElement`

The `ComponentElement` class is used to securely insert Svelte components directly into a translation. This is a powerful feature that allows you to create rich, interactive content (like icons or buttons) while giving translators control over their placement.

<AdvancedInsertComponentSimpleExample />

<Callout>

For more detailed examples, see the **[Insert Svelte Component]({base}/docs/advanced-features#insert-svelte-component)** section in our advanced features guide.

</Callout>

## Snippet arguments

The following arguments are passed to the `children` snippet.

<PropDescription name="attributes" type="Record<string, string>">

Filtered attributes defined in the Fluent message based on the `tag` and `allowAttributes`.

</PropDescription>

---

<PropDescription name="content" type="Snippet">

A snippet that can be used to render the translated content of the Fluent message.

</PropDescription>

---

## Examples

You can find more examples in the [Tutorial]({base}/docs/tutorial) and the [Advanced Features guide]({base}/docs/advanced-features).

### Render static text

<LocalizedStaticTextExample />

### Render dynamic text with variables

<LocalizedDynamicTextExample />
