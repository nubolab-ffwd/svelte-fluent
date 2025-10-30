<script lang="ts">
	import { resolve } from '$app/paths';
	import LightSwitch from '$lib/LightSwitch.svelte';
	import Logo from '$lib/logo.svelte';
	import IconGitHub from '~icons/mdi/github';
</script>

<header class="header">
	<nav aria-label="Primary">
		<div class="flex justify-between">
			<div>
				<a href={resolve('/')} class="flex items-center justify-center gap-2">
					<div class="inline-block w-16">
						<Logo />
					</div>
					<span class="font-bold">svelte-fluent</span>
				</a>
			</div>
			<div class="flex items-center justify-center gap-1">
				<a class="btn hover:preset-tonal" href={resolve('/docs')}>Docs</a>
				<LightSwitch />
				<a
					class="btn-icon hover:preset-tonal"
					href="https://github.com/nubolab-ffwd/svelte-fluent"
					target="_blank"
					rel="noreferrer noopener"
					title="View on GitHub"
				>
					<IconGitHub />
				</a>
			</div>
		</div>
	</nav>
</header>
