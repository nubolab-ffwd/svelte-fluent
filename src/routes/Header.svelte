<script lang="ts">
	import { base } from '$app/paths';
	import Logo from '$site/logo.svelte';
	import IconGitHub from '~icons/mdi/github';
</script>

<header>
	<nav aria-label="Primary" class="cluster" style:--justify="space-between">
		<div class="cluster">
			<a class="logo" href="{base}/">
				<Logo /> svelte-fluent
			</a>
		</div>
		<div class="cluster">
			<a href="{base}/docs">Docs</a>
			<a
				href="https://github.com/nubolab-ffwd/svelte-fluent"
				target="_blank"
				rel="noreferrer noopener"
				title="View on GitHub"
			>
				<div class="icon">
					<IconGitHub />
				</div>
			</a>
		</div>
	</nav>
</header>

<style lang="postcss">
	header {
		padding: var(--space);
		box-shadow: 0 0 var(--s-5) #aaa;
		margin-block-end: var(--s2);

		& .logo {
			display: flex;
			align-items: center;
			gap: var(--space);
			font-variant-ligatures: none;
			font-variation-settings: 'wght' 570;

			& :global(svg) {
				width: 4rem;
			}
		}
		& .icon {
			display: flex;
			justify-content: baseline;
		}
		& a {
			color: inherit;
		}
	}
</style>
