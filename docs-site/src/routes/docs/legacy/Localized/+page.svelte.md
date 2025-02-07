---
title: Localized (legacy)
menuTitle: Localized
---

<script>
	import ReferenceLink from '$site/ReferenceLink.svelte'
	import { LocalizedLegacyAttributesExample } from '$lib/rendered-examples'
</script>

# {title}

The `Localized` component exported from `@nubolab-ffwd/svelte-fluent/legacy` is a wrapper around the
regular <ReferenceLink name="Localized" /> component that allows you to use slots instead of snippets.

```ts
import { Localized } from '@nubolab-ffwd/svelte-fluent/legacy';
```

## Props

| Name   | Type                             | Default     | Description                           |
| :----- | :------------------------------- | :---------- | :------------------------------------ |
| `id`   | `string`                         | `undefined` | Unique identifier for the translation |
| `args` | `Record<string, FluentVariable>` | `undefined` | Arguments for interpolation           |

## Slots & Slot props

Slots are provided for backwards compatibility. New code should opt to use snippets.

| Name      | Prop    | Type                     | Description                   |
| :-------- | :------ | :----------------------- | :---------------------------- |
| `default` | `text`  | `string`                 | Translated message            |
| `default` | `attrs` | `Record<string, string>` | Attributes of the translation |

## Example

<LocalizedLegacyAttributesExample />
