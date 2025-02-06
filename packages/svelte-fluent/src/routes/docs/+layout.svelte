<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import PrevNext from './PrevNext.svelte';
	import SidebarMenu from './SidebarMenu.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="docs">
	<div
		class="with-sidebar wrap-reverse"
		style:--gap="var(--s5) var(--space)"
		style:--content-min="66%"
	>
		<div class="sidebar">
			<nav aria-label="Docs">
				<!--eslint-disable-next-line svelte/valid-compile -- https://github.com/sveltejs/eslint-plugin-svelte/issues/652 -->
				<SidebarMenu items={data.menu} />
			</nav>
		</div>
		<div class="content">
			<div class="stack">
				<main class="stack">{@render children()}</main>
				<hr />
				<nav>
					<!--eslint-disable-next-line svelte/valid-compile -- https://github.com/sveltejs/eslint-plugin-svelte/issues/652 -->
					<PrevNext
						menu={data.menu}
						activeMenuItem={data.activeMenuItem}
						activeSubmenuItem={data.activeSubmenuItem}
					/>
				</nav>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.with-sidebar {
		max-inline-size: 100%;
		justify-content: center;
	}
	.content,
	.sidebar {
		max-inline-size: var(--measure);
		padding-inline: var(--space);
	}
	.sidebar {
		flex-grow: 0;
		& nav {
			position: sticky;
			top: var(--space);
		}
	}
	nav {
		font-size: smaller;
	}
	main {
		margin-block-end: var(--s5);
		& :global(:not(h1) + h2) {
			margin-block-start: var(--s2);
		}
	}
	hr {
		margin-block-start: 0;
	}
</style>
