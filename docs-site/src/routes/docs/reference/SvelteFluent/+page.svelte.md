---
title: SvelteFluent
---

<script>
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import PropDescription from '$lib/PropDescription.svelte'
</script>

# {title}

The `SvelteFluent` object provides methods and properties for localization with `svelte-fluent`.

You can create the `SvelteFluent` object with the <ReferenceLink name="createSvelteFluent" /> function.

## Methods

### localize

Localize a Fluent message.

```ts
function localize(id: string, args?: Record<string, FluentVariable>): string;
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
