<script lang="ts">
	import Logo from '$lib/site/logo.svelte';
	import IconGithub from '~icons/mdi/github';
</script>

<header>
	<nav aria-label="Primary" class="cluster" style:--justify="space-between">
		<div class="cluster">
			<a class="logo" href="/">
				<Logo /> svelte-fluent
			</a>
		</div>
		<div class="cluster">
			<a href="/docs/">Docs</a>
			<a
				href="https://github.com/nubolab-ffwd/svelte-fluent"
				target="_blank"
				rel="noreferrer noopener"
				aria-label="Github"
			>
				<div class="icon">
					<IconGithub />
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
