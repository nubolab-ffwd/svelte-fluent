---
title: initFluentContext
---

<script>
	import ReferenceLink from '$site/ReferenceLink.svelte'
</script>

# {title}

Initializes a new <ReferenceLink name="FluentContext" /> with the given <ReferenceLink name="SvelteFluent" /> object
and adds it to the svelte context.

```ts
initFluentContext(() => fluent);
```

## Parameters

| Name | Type                 | Description                                                         |
| :--- | :------------------- | :------------------------------------------------------------------ |
| `fn` | `() => SvelteFluent` | Defines the <ReferenceLink name="SvelteFluent" /> object to be used |

## Return value

The <ReferenceLink name="FluentContext" /> object.
