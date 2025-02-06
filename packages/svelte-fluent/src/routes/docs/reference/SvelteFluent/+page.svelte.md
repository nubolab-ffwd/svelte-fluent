---
title: SvelteFluent
---

<script>
	import ReferenceLink from '$site/ReferenceLink.svelte'
</script>

# {title}

The `SvelteFluent` object provides methods and properties for localization with `svelte-fluent`.

You can create the `SvelteFluent` object with the <ReferenceLink name="createSvelteFluent" /> function.

## SvelteFluent.localize

Localize a fluent message.

```ts
fluent.localize('example-message', { name: 'Example' });
```

### Parameters

| Name   | Type                             | Description                             |
| :----- | :------------------------------- | :-------------------------------------- |
| `id`   | `string`                         | Identifier of the fluent message        |
| `args` | `Record<string, FluentVariable>` | Interpolation arguments for the message |

### Return value

The localized message as a `string`.
