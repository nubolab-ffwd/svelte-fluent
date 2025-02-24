<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import PrevNext from './PrevNext.svelte';
	import Menu from './Menu.svelte';
	import { page } from '$app/state';
	import { findActiveMenuItem } from './menu';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let activeMenu = $derived(findActiveMenuItem(data.menu, page.url.pathname, page.url.hash));
</script>

<div class="docs">
	<div class="navigation">
		<nav aria-label="Docs">
			<!--eslint-disable-next-line svelte/valid-compile -- https://github.com/sveltejs/eslint-plugin-svelte/issues/652 -->
			<Menu items={data.menu} activeMenuPath={activeMenu.path} />
		</nav>
	</div>
	<div class="content">
		<div class="stack">
			<main class="stack">{@render children()}</main>
			<hr />
			<nav>
				<!--eslint-disable-next-line svelte/valid-compile -- https://github.com/sveltejs/eslint-plugin-svelte/issues/652 -->
				<PrevNext menu={data.menu} activeMenuPath={activeMenu.path} />
			</nav>
		</div>
	</div>
</div>

<style lang="postcss">
	.docs {
		isolation: isolate;
		display: grid;
		justify-content: start;
		column-gap: var(--s4);
		row-gap: var(--s3);
		grid-template-columns: auto minmax(0px, 60rem);
		padding-inline: var(--s2);
		@media (--viewport-sm) {
			grid-template-columns: minmax(0px, 100%);
			padding-inline: 0;
			& > * {
				padding-inline: var(--space);
			}
		}
	}
	.content,
	.navigation {
		padding-block-end: var(--space);
	}
	.navigation {
		font-size: smaller;
		& :global(*) {
			max-inline-size: none;
		}
	}
	.content {
		overflow-x: hidden;
		& main {
			margin-block-end: var(--s5);
			& :global(:not(h1) + h2) {
				margin-block-start: var(--s2);
			}
		}
		& hr {
			margin-block-start: 0;
		}
	}
	/* sticky nav */
	.navigation {
		position: sticky;
		z-index: 1;
		top: 0;
		align-self: start;
		background-color: var(--theme-color-background);
		margin-block-start: calc(-1 * var(--space));
		padding-block-start: var(--space);

		@media (--viewport-sm) {
			--shadow: hsla(0 0% 0% / 0.13) 0 0.5rem 1rem;
			margin-block-start: calc(-1 * var(--s2));
			border-block-end: 1px solid var(--theme-separator-color);

			@supports (animation-timeline: scroll()) {
				animation: scroll-shadow linear both;
				animation-timeline: scroll();
				animation-range: 0rem 10rem;
			}
		}
	}
	@keyframes scroll-shadow {
		from {
			box-shadow: none;
		}
		to {
			box-shadow: var(--shadow);
		}
	}
	/* compensate for sticky nav on small viewports */
	@media (--viewport-sm) {
		:global(html, body) {
			scroll-padding-top: 10rem;
		}
	}
</style>
