---
title: createSvelteFluent
---

<script>
	import ReferenceLink from '$lib/ReferenceLink.svelte'
	import PropDescription from '$lib/PropDescription.svelte'
</script>

# {title}

Create a new <ReferenceLink name="SvelteFluent" /> object using the specified fluent bundles.

```ts
type Options = {
	markupParser?: MarkupParser;
	onError?: (msg: string) => void;
};

function createSvelteFluent(bundles: FluentBundle[], options: Options = {}): SvelteFluent;
```

## Arguments

<PropDescription name="bundles" type="FluentBundle[]">

Defines the fluent bundles to be be used for localization

</PropDescription>

---

<PropDescription name="options.onError" type="(msg: string) => void">

Define a custom function for handling errors. By default errors are logged to the console with `console.error`.

</PropDescription>

---

<PropDescription name="options.markupParser" type="MarkupParser">

**Experimental:** Override the default markup parser.

TODO: By default, `svelte-fluent` uses `jsdom` on the server and the browser's native DOMParser on the client. Use with caution.

</PropDescription>

---

## Return value

The <ReferenceLink name="SvelteFluent" /> object.
