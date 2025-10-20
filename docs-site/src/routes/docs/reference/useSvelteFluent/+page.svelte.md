---
title: useSvelteFluent
---

<script>
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import PropDescription from '$lib/PropDescription.svelte'
</script>

# {title}

The `useSvelteFluent` utility gives you access to the underlying <ReferenceLink name="SvelteFluent" /> instance that manages the localization bundles and provides the core `localize` function.

```ts
function useSvelteFluent(): { get current(): SvelteFluent };
```

## Return value

The utility returns a reactive object with a `current` property that provides the current <ReferenceLink name="SvelteFluent" /> instance from the Svelte context.

## Usage

While the <ReferenceLink name="useLocalize" /> utility is often more convenient for simple translations directly in components, `useSvelteFluent` is useful when you need direct access to the full `SvelteFluent` object.

```svelte
<script>
	import { useSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

	// Get the reactive wrapper object
	const fluent = useSvelteFluent();

	// Access the current SvelteFluent instance via the `.current` getter
	let message = $derived(fluent.current.localize('some-id'));
</script>

<p>{message}</p>
```

Refer to the <ReferenceLink name="SvelteFluent" /> documentation for details on the methods available.
