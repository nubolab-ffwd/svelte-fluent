<script lang="ts">
	import Logo from '$lib/logo.svelte';
	import { resolve } from '$app/paths';
</script>

<div class="hero flex flex-wrap-reverse justify-center gap-4">
	<div class="flex-1/2 space-y-4">
		<div>
			<h1 class="h1 text-secondary-800-200">svelte-fluent</h1>
			<p class="h1">The expressive Svelte localization library</p>
			<p class="text-balance text-2xl">
				Describe translations with Mozilla's natural-sounding Fluent syntax
			</p>
		</div>
		<div class="flex gap-4">
			<a class="btn preset-filled-primary-500 rounded-full" href={resolve('/docs/getting-started')}
				>Get started</a
			>
			<a
				class="btn preset-outlined rounded-full"
				href="https://github.com/nubolab-ffwd/svelte-fluent"
				target="_blank"
				rel="noopener noreferrer">View on GitHub</a
			>
		</div>
	</div>
	<div class="hidden max-w-72 grow md:block">
		<Logo />
	</div>
</div>
