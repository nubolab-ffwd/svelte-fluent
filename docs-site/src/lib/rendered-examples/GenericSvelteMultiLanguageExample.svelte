<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/generic-svelte-multi-language/App.svelte';
	import appSource from '$lib/examples/generic-svelte-multi-language/App.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/generic-svelte-multi-language/en.ftl?raw&highlight';
	import frFtlSource from '$lib/examples/generic-svelte-multi-language/fr.ftl?raw&highlight';
	import deFtlSource from '$lib/examples/generic-svelte-multi-language/de.ftl?raw&highlight';

	const args = { selectedLocale: '' };
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true },
		'en.ftl': { code: enFtlSource, html: true },
		'fr.ftl': { code: frFtlSource, html: true },
		'de.ftl': { code: deFtlSource, html: true }
	}}
>
	<App {...args} />
	{#snippet controls()}
		<dl
			class="grid grid-cols-[auto_minmax(min-content,20rem)] place-content-start items-center gap-4"
		>
			<dt>
				<label class="label font-mono" for="selected-locale">
					<span class="label-text">selectedLocale</span>
				</label>
			</dt>
			<dd>
				<select
					class="select ring-surface-600"
					id="selected-locale"
					bind:value={args.selectedLocale}
				>
					<option value="">auto</option>
					<option value="de">de</option>
					<option value="en">en</option>
					<option value="fr">fr</option>
				</select>
			</dd>
		</dl>
	{/snippet}
</ExampleRenderer>
