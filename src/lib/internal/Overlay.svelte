<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';
	import { onMount } from 'svelte';
	import { getTranslation, type Translation } from './stores';
	import { translateElement } from './utils';

	// props are also consumed in `../Overlay.js`. Changes made here need to be reflected there
	export let id: string;
	export let args: Record<string, FluentVariable> | undefined = undefined;

	let root: HTMLElement;
	let translatedRoot: HTMLElement;

	$: translation = $getTranslation(id, args);
	$: update(translation);

	function update(t: Translation) {
		if (t && root) {
			const newRoot = root.cloneNode(true) as typeof root;
			translateElement(newRoot, t);
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
