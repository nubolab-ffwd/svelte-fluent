---
title: initFluentContext
---

<script>
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import PropDescription from '$lib/PropDescription.svelte'
</script>

# {title}

Initializes the svelte component context for the utitilies and components provided by `svelte-fluent`.

```ts
function initFluentContext(getFluent: () => SvelteFluent): void;
```

## Arguments

<PropDescription name="getFluent" type="() => SvelteFluent">

Defines the <ReferenceLink name="SvelteFluent" /> object that components and utilities should use.

</PropDescription>
