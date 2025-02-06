---
title: Overlay (legacy)
menuTitle: Overlay
---

<script>
	import ReferenceLink from '$site/ReferenceLink.svelte'
</script>

# {title}

The `Overlay` component exported from `@nubolab-ffwd/svelte-fluent/legacy` is a wrapper around the
regular <ReferenceLink name="Overlay" /> component that allows you to use slots instead of snippets.

## Props

| Name   | Type                             | Default     | Description                           |
| :----- | :------------------------------- | :---------- | :------------------------------------ |
| `id`   | `string`                         | `undefined` | Unique identifier for the translation |
| `args` | `Record<string, FluentVariable>` | `undefined` | Arguments for interpolation           |

## Slots

Slots are provided for backwards compatibility. New code should opt to use snippets.

| Name      | Description                                    |
| :-------- | :--------------------------------------------- |
| `default` | Defines the markup the Overlay is applied upon |
