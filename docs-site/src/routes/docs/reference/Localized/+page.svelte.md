---
title: Localized
---

<script>
	import {
		LocalizedAttributesExample,
		LocalizedAttributesWithVariablesExample,
		LocalizedDynamicTextExample,
		LocalizedStaticTextExample
	} from '$lib/rendered-examples';

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

<LocalizedStaticTextExample />

## Dynamic text with variables example

<LocalizedDynamicTextExample />

## Attributes example

<LocalizedAttributesExample />

## Attributes with variables example

<LocalizedAttributesWithVariablesExample />
