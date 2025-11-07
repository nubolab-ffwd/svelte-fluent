<script lang="ts">
	import type { Snippet } from 'svelte';
	import MaterialSymbolsContentCopyOutline from '~icons/material-symbols/content-copy-outline';
	import MaterialSymbolsCheck from '~icons/material-symbols/check';
	import { Collapsible } from '@skeletonlabs/skeleton-svelte';
	import MaterialSymbolsExpandCircleDownOutline from '~icons/material-symbols/expand-circle-down-outline';
	import MaterialSymbolsExpandCircleUpOutline from '~icons/material-symbols/expand-circle-up-outline';

	interface Props {
		title?: string;
		collapsible?: boolean;
		defaultCollapsed?: boolean;
		children?: Snippet;
	}
	const { title, children, collapsible = false, defaultCollapsed = false }: Props = $props();

	let container: HTMLElement;

	let copied = $state(false);
	let timer: ReturnType<typeof setTimeout> | undefined;
	let collapsed = $state(defaultCollapsed);

	function copyToClipboard() {
		const sourceElem = container.querySelector('pre');
		if (!sourceElem) {
			return;
		}
		navigator.clipboard.writeText(sourceElem.textContent);

		copied = true;
		clearTimeout(timer);
		timer = setTimeout(() => {
			copied = false;
			timer = undefined;
		}, 2000);
	}
</script>

{#snippet content()}
	<figure
		class="card bg-surface-900 text-surface-contrast-900 scheme-dark grid max-w-full grid-cols-[auto_minmax(0,1fr)_auto] font-mono text-xs"
		bind:this={container}
	>
		{#if title}
			<figcaption
				class={[
					'text-surface-contrast-900/70 row-1 col-2 mx-0 self-center overflow-x-clip text-ellipsis py-2',
					!collapsible && 'ps-4'
				]}
			>
				{title}
			</figcaption>
			{#if collapsible}
				{@const label = collapsed ? 'Expand code' : 'Collapse code'}
				<div class="row-1 col-1 p-2">
					<Collapsible.Trigger
						aria-label={label}
						title={label}
						class="btn-icon hover:preset-tonal  text-surface-contrast-900/70"
					>
						{#if collapsed}<MaterialSymbolsExpandCircleDownOutline
							/>{:else}<MaterialSymbolsExpandCircleUpOutline />{/if}
					</Collapsible.Trigger>
				</div>
			{/if}
			{#if !collapsible || !collapsed}
				<hr class="hr border-surface-700 row-2 col-span-full" />
			{/if}
		{/if}
		{#if collapsible}
			<Collapsible.Content class="row-3 col-span-full py-4">
				{@render code()}
			</Collapsible.Content>
		{:else}
			<div class="row-3 relative col-span-full py-4">
				{@render code()}
			</div>
		{/if}

		<div class={['justify-self-end p-2', title ? 'row-1 col-3' : 'row-3 col-span-full']}>
			<button
				class={[
					'btn-icon hover:preset-tonal text-surface-contrast-900/70',
					copied && 'preset-tonal-success'
				]}
				aria-label={copied ? 'Code copied to clipboard' : 'Copy code'}
				title="Copy code to clipboard"
				onclick={() => copyToClipboard()}
			>
				{#if copied}<MaterialSymbolsCheck />{:else}<MaterialSymbolsContentCopyOutline />{/if}
			</button>
		</div>
	</figure>
{/snippet}

{#snippet code()}
	<div class="scrollbar-dark overflow-x-auto">
		{@render children?.()}
	</div>
{/snippet}

{#if collapsible}
	<Collapsible open={!collapsed} onOpenChange={(details) => (collapsed = !details.open)}>
		{@render content()}
	</Collapsible>
{:else}
	{@render content()}
{/if}
