<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';

	import { onMount } from 'svelte';
	import { stores, type Translation } from './FluentProvider.svelte';
	import { translateElement } from './utils';

	// props are also consumed in `../Overlay.js`. Changes made here need to be reflected there
	export let id: string;
	export let args: Record<string, FluentVariable> | undefined = undefined;

	let root: HTMLElement;
	let translatedRoot: HTMLElement;

	const { getTranslation } = stores();

	$: translation = $getTranslation(id, args);
	$: update(translation);

	function update(translation: Translation) {
		if (translation && root) {
			const newRoot = root.cloneNode(true) as typeof root;
			translateElement(newRoot, translation);
			if (translatedRoot?.parentNode) {
				translatedRoot.parentNode.replaceChild(newRoot, translatedRoot);
			}
			translatedRoot = newRoot;
		}
	}

	onMount(() => {
		const observer = new MutationObserver(() => {
			update(translation);
		});
		if (root && translation) {
			translatedRoot = root.cloneNode(true) as typeof root;
			translateElement(translatedRoot, translation);
			if (root?.parentNode) {
				root.parentNode.replaceChild(translatedRoot, root);
			}
			observer.observe(root, {
				attributes: true,
				characterData: true,
				childList: true,
				subtree: true
			});
		}
		return () => {
			observer.disconnect();
			if (translatedRoot?.parentNode) {
				translatedRoot.parentNode.replaceChild(root, translatedRoot);
			}
		};
	});
</script>

<div bind:this={root}>
	<slot />
</div>

<style>
	div {
		display: contents;
	}
</style>
