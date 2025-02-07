---
title: Localized
---

<script>
	import ExampleLocalizedStaticText from '$site/examples/localized/static-text/Example.svelte'
	import ExampleLocalizedDynamicText from '$site/examples/localized/dynamic-text/Example.svelte'
	import ExampleLocalizedAttributes from '$site/examples/localized/attributes/Example.svelte'
	import ExampleLocalizedAttributesWithVariables from '$site/examples/localized/attributes-with-variables/Example.svelte'

	const localizedChildrenSnippetType = [
	'Snippet<{',
	'	text: string;',
	'	attrs: Record<string, string>;',
	'}>'
].join('\n')
</script>

# {title}

The `Localized` component renders a translation message and outputs it as plain text.
The output can be customized by overriding the default slot of the component.

## Props

| Name   | Type                             | Default     | Description                           |
| :----- | :------------------------------- | :---------- | :------------------------------------ |
| `id`   | `string`                         | `undefined` | Unique identifier for the translation |
| `args` | `Record<string, FluentVariable>` | `undefined` | Arguments for interpolation           |

## Snippets

| Name       | Type                                                   | Description                                        |
| :--------- | :----------------------------------------------------- | :------------------------------------------------- |
| `children` | <pre><code>{localizedChildrenSnippetType}</code></pre> | Replaces the text output of the translated message |

## Static text example

<ExampleLocalizedStaticText />

## Dynamic text with variables example

<ExampleLocalizedDynamicText />

## Attributes example

<ExampleLocalizedAttributes />

## Attributes with variables example

<ExampleLocalizedAttributesWithVariables />
