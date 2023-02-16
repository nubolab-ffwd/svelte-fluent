<script lang="ts">
	import { page } from '$app/stores';
	import SidebarMenu from './SidebarMenu.svelte';
	import PrevNext from './PrevNext.svelte';
</script>

<div class="docs with-sidebar wrap-reverse" style:--gap="var(--s5) var(--space)">
	<div class="sidebar">
		<nav aria-label="Docs">
			<SidebarMenu items={$page.data.menu} />
		</nav>
	</div>
	<div class="content">
		<div class="stack center with-gutters">
			<main class="stack"><slot /></main>
			<hr />
			<nav>
				<PrevNext menu={$page.data.menu} />
			</nav>
		</div>
	</div>
</div>

<style lang="postcss">
	.sidebar {
		padding-inline: var(--space);
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
			margin-block-start: var(--s3);
		}
	}
	hr {
		margin-block-start: 0;
	}
</style>
