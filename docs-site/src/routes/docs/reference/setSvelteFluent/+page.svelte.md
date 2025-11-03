---
title: setSvelteFluent
---

<script>
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import PropDescription from '$lib/PropDescription.svelte'
</script>

# {title}

Makes the <ReferenceLink name="SvelteFluent" /> instance available to all `svelte-fluent`
components and utilities (like <ReferenceLink name="useLocalize" /> and <ReferenceLink name="Localized" />)
via the Svelte context.

```ts
function setSvelteFluent(getFluent: () => SvelteFluent): void;
```

## Arguments

<PropDescription name="getFluent" type="() => SvelteFluent">

Defines the <ReferenceLink name="SvelteFluent" /> object that components and utilities should use.

</PropDescription>
