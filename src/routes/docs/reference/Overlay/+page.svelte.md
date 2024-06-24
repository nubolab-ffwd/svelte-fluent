---
title: Overlay (experimental)
menuTitle: Overlay
---

<script>
	import ExampleOverlayStaticText from '$site/examples/overlay/static-text/Example.svelte'
	import ExampleOverlayDynamicText from '$site/examples/overlay/dynamic-text/Example.svelte'
</script>

# {title}

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
- Event handlers (`<tag onclick={handleClick} />`) bound on children of the `<Overlay/>` component will not fire

## Snippets

| Name       | Type      | Description                                    |
| :--------- | :-------- | :--------------------------------------------- |
| `children` | `Snippet` | Defines the markup the Overlay is applied upon |

## Static text example

<ExampleOverlayStaticText />

## Dynamic text with variables example

<ExampleOverlayDynamicText />

## Props

| Name   | Type                             | Default     | Description                           |
| :----- | :------------------------------- | :---------- | :------------------------------------ |
| `id`   | `string`                         | `undefined` | Unique identifier for the translation |
| `args` | `Record<string, FluentVariable>` | `undefined` | Arguments for interpolation           |
