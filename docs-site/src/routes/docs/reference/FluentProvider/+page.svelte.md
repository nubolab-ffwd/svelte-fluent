---
title: FluentProvider (deprecated)
menuTitle: FluentProvider
---

<script>
	import { ProviderExample } from '$lib/rendered-examples';
</script>

# {title}

> The FluentProvider component is **deprecated in v1**.
> Please review the Migration Guide for a replacement.

The `FluentProvider` component provides context for all other components and stores of `svelte-fluent`.

Typically there is only a single instance of `FluentProvider` wrapping the top level of the application
(e.g. in a `__layout.svelte` file in SvelteKit or similar). For specialized needs it's possible to nest
multiple `FluentProvider` instances.

The mandatory `bundles` argument takes a list of
[`FluentBundle`](https://projectfluent.org/fluent.js/bundle/classes/fluentbundle.html) instances. When resolving a
translation each of the provided bundles will be tried in sequence until the translation message is found making
it possible to split your translations across several files and use different bundle configurations (like attached
functions) for each of them.

The `FluentProvider` component also emits `error` events whenever a translation message fails to parse or render.

## Example

<ProviderExample />

## Props

| Name      | Type                     | Default     | Description                                      |
| :-------- | :----------------------- | :---------- | :----------------------------------------------- |
| `bundles` | `Iterable<FluentBundle>` | `undefined` | A list (or iterable) of `FluentBundle` instances |

## Slots

| Name      | Prop | Type | Description                                                               |
| :-------- | :--- | :--- | :------------------------------------------------------------------------ |
| `default` | -    | -    | Child components of this slot use the configured bundles for translations |

## Events

| Name    | Type of event `details` | Description                                                     |
| :------ | :---------------------- | :-------------------------------------------------------------- |
| `error` | `string`                | Emitted whenever a translation message fails to parse or render |
