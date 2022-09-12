---
title: Overlay (experimental)
---

<script>
	import ExampleStaticText from '$lib/site/examples/overlay/static-text/Example.svelte'
	import ExampleDynamicText from '$lib/site/examples/overlay/dynamic-text/Example.svelte'
</script>

# {title}

The experimental Overlay component uses [fluent.js DOM Overlays](https://github.com/projectfluent/fluent.js/wiki/DOM-Overlays)
to render translation messages that contain HTML markup.

Usages of DOM overlays are to:

- allow localizers to use some safe text-level markup in translations, and
- allow developers to pass functional elements as arguments to translations.

## Examples

### Static text

<ExampleStaticText />

### Dynamic text with variables

<ExampleDynamicText />

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
