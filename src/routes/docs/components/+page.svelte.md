<script>
	import ExampleProvider from '$lib/site/examples/provider/Example.svelte'
	import ExampleLocalizedStaticText from '$lib/site/examples/localized/static-text/Example.svelte'
	import ExampleLocalizedDynamicText from '$lib/site/examples/localized/dynamic-text/Example.svelte'
	import ExampleLocalizedAttributes from '$lib/site/examples/localized/attributes/Example.svelte'
	import ExampleLocalizedAttributesWithVariables from '$lib/site/examples/localized/attributes-with-variables/Example.svelte'
	import ExampleOverlayStaticText from '$lib/site/examples/overlay/static-text/Example.svelte'
	import ExampleOverlayDynamicText from '$lib/site/examples/overlay/dynamic-text/Example.svelte'
</script>

# Components

## FluentProvider

Typically there is only a single instance of `FluentProvider` wrapping the top level of the application
(e.g. in a `__layout.svelte` file in SvelteKit or similar). For specialized needs it's possible to nest
multiple `FluentProvider` instances.

The mandatory `bundles` argument takes a list of
[`FluentBundle`](https://projectfluent.org/fluent.js/bundle/classes/fluentbundle.html) instances. When resolving a
translation each of the provided bundles will be tried in sequence until the translation message is found making
it possible to split your translations across several files and use different bundle configurations (like attached
functions) for each of them.

The `FluentBundle` component also emits `error` events whenever a translation message fails to parse or render.

### Example

<ExampleProvider />

### Props

| Name      | Type                     | Default     | Description                                      |
| :-------- | :----------------------- | :---------- | :----------------------------------------------- |
| `bundles` | `Iterable<FluentBundle>` | `undefined` | A list (or iterable) of `FluentBundle` instances |

### Slots

| Name      | Prop | Type | Description                                                               |
| :-------- | :--- | :--- | :------------------------------------------------------------------------ |
| `default` | -    | -    | Child components of this slot use the configured bundles for translations |

### Events

| Name    | Type of event `details` | Description                                                     |
| :------ | :---------------------- | :-------------------------------------------------------------- |
| `error` | `string`                | Emitted whenever a translation message fails to parse or render |

## Localized

The Localized component renders a translation message and outputs it as plain text.
The output can be customized by overriding the default slot of the component.

### Static text example

<ExampleLocalizedStaticText />

### Dynamic text with variables example

<ExampleLocalizedDynamicText />

### Attributes example

<ExampleLocalizedAttributes />

### Attributes with variables example

<ExampleLocalizedAttributesWithVariables />

### Props

| Name   | Type                             | Default     | Description                           |
| :----- | :------------------------------- | :---------- | :------------------------------------ |
| `id`   | `string`                         | `undefined` | Unique identifier for the translation |
| `args` | `Record<string, FluentVariable>` | `undefined` | Arguments for interpolation           |

### Slots & Slot props

| Name      | Prop    | Type                     | Description                   |
| :-------- | :------ | :----------------------- | :---------------------------- |
| `default` | `text`  | `string`                 | Translated message            |
| `default` | `attrs` | `Record<string, string>` | Attributes of the translation |

## Overlay (experimental)

The experimental Overlay component uses [fluent.js DOM Overlays](https://github.com/projectfluent/fluent.js/wiki/DOM-Overlays)
to render translation messages that contain HTML markup.

DOM overlays provide a safe mechanism for translators to use text-level markup.
They also allow developers to provide functional elements that can be used in translations.

Please check the [fluent.js documentation for DOM Overlays](https://github.com/projectfluent/fluent.js/wiki/DOM-Overlays)
if you want to learn more.

Due to the way DOM Overlays are currently implemented in `svelte-fluent` there are some additional limitations
to the [limitations listed in the @fluent/dom wiki](https://github.com/projectfluent/fluent.js/wiki/DOM-Overlays#limitations):

- Updates to `<Overlay/>` component props and children cause a high overhead and should be minimized
- Svelte actions (`<tag use:someaction/>`) won't work correctly for children of the `<Overlay/>` component
- Svelte transitions/animations (`<tag transition:fade />`) won't work correctly for children of the `<Overlay/>` component
- Svelte bindings (`<tag bind:clientWidth={something} />`) won't work correctly for children of the `<Overlay/>` component
- Event handlers (`<tag on:click={handleClick} />`) bound on children of the `<Overlay/>` component will not fire

### Static text example

<ExampleOverlayStaticText />

### Dynamic text with variables example

<ExampleOverlayDynamicText />

### Props

| Name   | Type                             | Default     | Description                           |
| :----- | :------------------------------- | :---------- | :------------------------------------ |
| `id`   | `string`                         | `undefined` | Unique identifier for the translation |
| `args` | `Record<string, FluentVariable>` | `undefined` | Arguments for interpolation           |

### Slots & Slot props

| Name      | Prop    | Type                     | Description                   |
| :-------- | :------ | :----------------------- | :---------------------------- |
| `default` | `text`  | `string`                 | Translated message            |
| `default` | `attrs` | `Record<string, string>` | Attributes of the translation |
