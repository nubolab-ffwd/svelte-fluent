<script lang="ts">
	import Logo from '$lib/logo.svelte';
	import { base } from '$app/paths';
</script>

<div class="hero with-sidebar right wrap-reverse" style:--content-min="50%">
	<div class="stack">
		<div>
			<h1>svelte-fluent</h1>
			<p class="text">The expressive Svelte localization library</p>
			<p class="tagline">Describe translations with Mozilla's natural-sounding Fluent syntax</p>
		</div>
		<div class="buttons">
			<a class="button primary" href="{base}/docs/getting-started">Get started</a>
			<a
				class="button"
				href="https://github.com/nubolab-ffwd/svelte-fluent"
				target="_blank"
				rel="noopener noreferrer">View on GitHub</a
			>
		</div>
	</div>
	<div class="logo-wrapper">
		<Logo />
	</div>
</div>

<style lang="postcss">
	.hero {
		justify-content: center;
		& h1,
		& .text {
			line-height: 1.1;
			font-size: var(--font-size-big);
			font-variation-settings: 'wght' 800;
		}
		& .text {
			text-transform: capitalize;
		}
		& h1 {
			color: var(--theme-color-primary);
			font-variant-ligatures: none;
		}
		& .tagline {
			margin-block-start: var(--s-5);
			font-size: var(--font-size-biggish);
			font-variation-settings: 'wght' 500;
		}
		& .logo-wrapper {
			inline-size: clamp(calc(320px - 2rem), 10rem, calc(100vw - 8rem));
			display: flex;
		}
		& .buttons {
			display: flex;
			gap: var(--space);
			font-size: var(--font-size-smallish);
		}
	}
</style>
