---
title: FluentContext
---

<script>
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import {
		LocalizeAttributesExample,
		LocalizeDynamicTextExample,
		LocalizeStaticTextExample
	} from '$lib/rendered-examples';
</script>

# {title}

The `FluentContext` object exposes localization functions via the svelte context.
It's used internally by the <ReferenceLink name="Localized" /> and <ReferenceLink name="Overlay" /> components.
It can also be retrieved with <ReferenceLink name="getFluentContext" /> and used directly.

## FluentContext.localize

The `FluentContext.localize` function allows you to use localizations in component scripts. This can be useful when interacting
with browser APIs or third-party libraries.

> Using the <ReferenceLink name="Localized" /> and <ReferenceLink name="getFluentContext" /> components is the
> preferred way to localize your application with `svelte-fluent`.
> The `FluentContext.localize` function provides additional flexibility in situations where using the components would not be
> feasible.

```ts
const { localize } = getFluentContext();
const text = localize(id, args);
```

### Parameters

| Name   | Type                             | Default     | Description                           |
| :----- | :------------------------------- | :---------- | :------------------------------------ |
| `id`   | `string`                         | `undefined` | Unique identifier for the translation |
| `args` | `Record<string, FluentVariable>` | `undefined` | Arguments for interpolation           |

### Return value

The localized message as a `string`.

### Static text example

<LocalizeStaticTextExample />

### Dynamic text with variables example

<LocalizeDynamicTextExample />

### Attributes example

> You can reference attributes of a translation message by calling `localize` with both identifiers joined with a period.
>
> In the example below this is done for the `.default` attribute of the `prompt` message by
> calling `localize` with `'prompt.default'` as the message identifier.

<LocalizeAttributesExample />
