<script lang="ts">
	import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
	import type { Snippet } from 'svelte';
	import MaterialSymbolsMenu from '~icons/material-symbols/menu';

	const { children }: { children: Snippet } = $props();
</script>

<Dialog>
	<Dialog.Trigger class="btn-icon hover:preset-tonal" aria-label="Toggle Sidebar">
		<MaterialSymbolsMenu />
	</Dialog.Trigger>
	<Portal>
		<Dialog.Backdrop
			class="bg-surface-50-950/50 transition-discrete starting:data-[state=open]:opacity-0 fixed inset-0 z-50 opacity-0 transition data-[state=open]:opacity-100"
		/>
		<Dialog.Positioner class="fixed inset-0 z-50 flex justify-start">
			<Dialog.Content
				class="card bg-surface-100-900 w-sm transition-discrete starting:data-[state=open]:opacity-0 starting:data-[state=open]:-translate-x-full h-screen -translate-x-full opacity-0 shadow-xl transition data-[state=open]:translate-x-0 data-[state=open]:opacity-100"
			>
				{@render children()}
			</Dialog.Content>
		</Dialog.Positioner>
	</Portal>
</Dialog>
