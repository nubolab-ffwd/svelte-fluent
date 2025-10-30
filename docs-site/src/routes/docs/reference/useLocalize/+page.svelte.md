---
title: useLocalize
---

<script>
	import Callout from '$lib/Callout.svelte'
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import PropDescription from '$lib/PropDescription.svelte'
	import LocalizeAttributesExample from '$lib/rendered-examples/LocalizeAttributesExample.svelte'
	import LocalizeDynamicTextExample from '$lib/rendered-examples/LocalizeDynamicTextExample.svelte'
	import LocalizeStaticTextExample from '$lib/rendered-examples/LocalizeStaticTextExample.svelte'
</script>

# {title}

The `useLocalize` utility gives you access to a reactive `localize` function that you can use to render translated content
in places where using the `<Localized>` component would be inconvenient or impossible.

```ts
const localize = useLocalize();
```

## localize

```ts
function localize(id: string, args?: Record<string, FluentVariable>): string;
```

The reactive `localize` function allows you to get localized strings in component scripts. This can be useful when interacting
with browser APIs or third-party libraries.

<Callout>

Using the `<Localized>` component is the preferred way to localize your application with `svelte-fluent`.
The `localize` function provides additional flexibility in situations where using the component would not be
feasible.

</Callout>

```ts
const localize = useLocalize();
const text = localize(id, args);
```

#### Arguments

<PropDescription name="id" type="string">

The unique identifier of the Fluent message.

</PropDescription>

---

<PropDescription name="args" type="Record<string, FluentVariable>">

Arguments for interpolation within the Fluent message.

</PropDescription>

---

#### Return value

The localized content as a `string`.

## Examples

### Render static text

<LocalizeStaticTextExample />

### Render dynamic text with variables

<LocalizeDynamicTextExample />

### Reference fluent message attributes

<Callout>

You can reference attributes of a Fluent message by calling `localize` with both identifiers joined with a period.

In the example below this is done for the `.default` attribute of the `prompt` message by
calling `localize` with `'prompt.default'` as the message identifier.

</Callout>

<LocalizeAttributesExample />
