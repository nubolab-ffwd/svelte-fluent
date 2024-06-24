<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';
	import { type Snippet } from 'svelte';
	import { getInternalFluentContext } from './context.svelte';
	import { translateElement } from './utils';
	import type { Action } from 'svelte/action';
	import type { Translation } from './translation';

	// props are also consumed in `../OverlaySSR.ts`. Changes made here need to be reflected there
	let {
		id,
		args,
		children
	}: {
		id: string;
		args?: Record<string, FluentVariable> | undefined;
		children?: Snippet;
	} = $props();

	const { getTranslation } = getInternalFluentContext();

	const applyTranslation: Action<HTMLDivElement, Translation> = (
		node,
		translation: Translation
	) => {
		let translatedNode: typeof node = node;

		function update(translation: Translation) {
			if (translation) {
				const newNode = node.cloneNode(true) as typeof node;
				translateElement(newNode, translation);
				if (translatedNode?.parentNode) {
					translatedNode.parentNode.replaceChild(newNode, translatedNode);
				}
				translatedNode = newNode;
			}
		}
		update(translation);

		const observer = new MutationObserver(() => {
			update(translation);
		});
		observer.observe(node, {
			attributes: true,
			characterData: true,
			childList: true,
			subtree: true
		});

		return {
			update,
			destroy: () => {
				observer.disconnect();
				if (node && translatedNode?.parentNode) {
					translatedNode.parentNode.replaceChild(node, translatedNode);
				}
			}
		};
	};
</script>

<div use:applyTranslation={getTranslation(id, args, true)}>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	div {
		display: contents;
	}
</style>
