---
title: createSvelteFluent
---

<script>
	import ReferenceLink from '$lib/ReferenceLink.svelte'
</script>

# {title}

Create a new <ReferenceLink name="SvelteFluent" /> object using the specified fluent bundles.

```ts
const fluent = createSvelteFluent(bundles, options);
```

## Parameters

| Name      | Type                               | Description                                               |
| :-------- | :--------------------------------- | :-------------------------------------------------------- |
| `bundles` | `FluentBundle[]`                   | Defines the fluent bundles to be be used for localization |
| `options` | `{onError: (msg: string) => void}` | Options                                                   |

## Return value

The <ReferenceLink name="SvelteFluent" /> object.
