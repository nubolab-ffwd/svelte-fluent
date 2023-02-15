<script lang="ts">
	import Logo from '$lib/site/logo.svelte';
</script>

<div class="hero with-sidebar right wrap-reverse" style:--content-min="50%">
	<div>
		<h1>svelte-fluent</h1>
		<p class="text">The expressive Svelte localisation library</p>
		<p class="tagline">Describe translations with Mozilla's natural-sounding Fluent syntax</p>
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
		& h1 {
			color: var(--theme-color-secondary);
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
	}
</style>
