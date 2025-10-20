---
title: Localized
---

<script>
	import { base } from '$app/paths'
	import PropDescription from '$lib/PropDescription.svelte'
	import LocalizedDynamicTextExample from '$lib/rendered-examples/LocalizedDynamicTextExample.svelte'
	import LocalizedStaticTextExample from '$lib/rendered-examples/LocalizedStaticTextExample.svelte'
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

<PropDescription name="elements" type="Record<string, TagElement | ComponentElement>" default={'{}'}>

A configuration object for securely injecting HTML elements (using `TagElement`) or Svelte components (using `ComponentElement`) into placeholders within the Fluent message. See the [Advanced Features guide]({base}/docs/advanced-features) for details.

</PropDescription>

---

<PropDescription name="children" type="Snippet">

The `children` snippet allows for full control over the output.

</PropDescription>

---

## Snippet arguments

The following arguments are passed to the `children` snippet.

<PropDescription name="attributes" type="Record<string, string>">

Filtered attributes defined in the Fluent message based on the `tag` and `allowAttributes`.

</PropDescription>

---

<PropDescription name="translatedContent" type="Snippet">

A snippet that can be used to render the translated content of the Fluent message.

</PropDescription>

---

## Examples

You can find more examples in the [Tutorial]({base}/docs/tutorial) and the [Advanced Features guide]({base}/docs/advanced-features).

### Render static text

<LocalizedStaticTextExample />

### Render dynamic text with variables

<LocalizedDynamicTextExample />
