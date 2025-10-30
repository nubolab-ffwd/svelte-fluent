<script lang="ts">
	import MaterialSymbolsLightModeOutline from '~icons/material-symbols/light-mode-outline';
	import MaterialSymbolsDarkModeOutline from '~icons/material-symbols/dark-mode-outline';
	let dark = $state(false);

	$effect(() => {
		const mode = localStorage.getItem('mode') || 'light';
		dark = mode === 'dark';
	});

	const toggle = () => {
		dark = !dark;
		const mode = dark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
	};
</script>

<svelte:head>
	<script>
		(() => {
			const mode = localStorage.getItem('mode') || 'light';
			document.documentElement.setAttribute('data-mode', mode);
		})();
	</script>
</svelte:head>

<button
	class="btn-icon hover:preset-tonal"
	role="switch"
	aria-checked={dark}
	aria-label="Toggle dark mode."
	title="Toggle dark mode."
	onclick={() => toggle()}
>
	<MaterialSymbolsLightModeOutline class="hidden dark:inline" />
	<MaterialSymbolsDarkModeOutline class="dark:hidden" />
</button>
