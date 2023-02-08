---
title: FluentProvider
---

<script>
	import ExampleMultiLanguage from '$lib/site/examples/tutorial/multi-language/Example.svelte'
</script>

# {title}

The FluentProvider component provides configuration to child components in it's default slot.

Typically there is only a single instance of FluentProvider wrapping the top level of the application
(e.g. in a `__layout.svelte` file in SvelteKit or similar). For specialized needs it's possible to nest
multiple FluentProvider instances.

The mandatory `bundles` argument takes a list of
[FluentBundle](https://projectfluent.org/fluent.js/bundle/classes/fluentbundle.html) instances.When resolving a
translation via it's `id` each of the provided bundles will be tried in sequence until the translation message
is found making it possible to split your translations across several files and use different bundle configurations
(like attached functions) for each of them.

The FluentBundle component also emits `error` events whenever a translation message fails to parse or render.

## Example

<ExampleMultiLanguage />

## Component API

### Props

| Prop name | Type                     | Default value | Description                                      |
| :-------- | :----------------------- | :------------ | :----------------------------------------------- |
| `bundles` | `Iterable<FluentBundle>` | `undefined`   | A list (or iterable) of `FluentBundle` instances |

### Slots

| Slot name | Prop name | Type | Description                                                               |
| :-------- | :-------- | :--- | :------------------------------------------------------------------------ |
| `default` | -         | -    | Child components of this slot use the configured bundles for translations |

### Events

| Event name | Type of event `details` | Description                                                     |
| :--------- | :---------------------- | :-------------------------------------------------------------- |
| `error`    | `string`                | Emitted whenever a translation message fails to parse or render |
