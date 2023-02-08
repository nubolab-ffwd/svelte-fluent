---
title: Localized
---

<script>
	import ExampleStaticText from '$lib/site/examples/localized/static-text/Example.svelte'
	import ExampleDynamicText from '$lib/site/examples/localized/dynamic-text/Example.svelte'
	import ExampleAttributes from '$lib/site/examples/localized/attributes/Example.svelte'
	import ExampleAttributesWithVariables from '$lib/site/examples/localized/attributes-with-variables/Example.svelte'
</script>

# {title}

The Localized component renders a translation message and outputs it as plain text.
The output can be customized by overriding the default slot of the component.

## Examples

### Static text

<ExampleStaticText />

### Dynamic text with variables

<ExampleDynamicText />

### Attributes

<ExampleAttributes />

### Attributes with variables

<ExampleAttributesWithVariables />

## Component API

### Props

| Prop name | Type                             | Default value | Description                           |
| :-------- | :------------------------------- | :------------ | :------------------------------------ |
| `id`      | `string`                         | `undefined`   | Unique identifier for the translation |
| `args`    | `Record<string, FluentVariable>` | `undefined`   | Arguments for interpolation           |

### Slots & Slot props

| Slot name | Prop name | Type                     | Description                   |
| :-------- | :-------- | :----------------------- | :---------------------------- |
| `default` | `text`    | `string`                 | Translated message            |
| `default` | `attrs`   | `Record<string, string>` | Attributes of the translation |
