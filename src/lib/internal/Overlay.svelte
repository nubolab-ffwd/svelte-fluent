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

	let templateElem: HTMLTemplateElement | undefined = $state();

	const { getTranslation } = getInternalFluentContext();

	const applyTranslation: Action<
		HTMLElement,
		{ translation: Translation; templateNode?: HTMLTemplateElement }
	> = (node, { translation, templateNode }) => {
		const observer = new MutationObserver(() => updateContent(translation, templateNode));
		let observedTemplateNode: HTMLTemplateElement | undefined;

		function updateObserver(templateNode?: HTMLTemplateElement) {
			const changed = observedTemplateNode !== templateNode;
			if (changed) {
				observer.disconnect();
			}
			if (changed && templateNode) {
				observer.observe(templateNode.content, {
					attributes: true,
					characterData: true,
					childList: true,
					subtree: true
				});
			}
			observedTemplateNode = templateNode;
		}

		function updateContent(translation: Translation, templateNode?: HTMLTemplateElement) {
			if (translation && templateNode) {
				node.innerHTML = '';
				node.appendChild(templateNode.content.cloneNode(true));
				translateElement(node, translation);
			}
		}

		function update(newParams: { translation: Translation; templateNode?: HTMLTemplateElement }) {
			translation = newParams.translation;
			templateNode = newParams.templateNode;
			updateObserver(templateNode);
			updateContent(translation, templateNode);
		}

		update({ translation, templateNode });

		return {
			update,
			destroy: () => observer.disconnect()
		};
	};
</script>

<svelte:head>
	<template bind:this={templateElem}>{@render children?.()}</template>
</svelte:head>

<svelte-fluent-overlay
	style:display="contents"
	use:applyTranslation={{ translation: getTranslation(id, args, true), templateNode: templateElem }}
></svelte-fluent-overlay>
