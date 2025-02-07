<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import App from 'svelte-fluent-examples/src/tutorial/multi-language/App.svelte';
	import appSource from 'svelte-fluent-examples/src/tutorial/multi-language/App.svelte?raw&highlight';
	import enFtlSource from 'svelte-fluent-examples/src/tutorial/multi-language/en.ftl?raw&highlight';
	import frFtlSource from 'svelte-fluent-examples/src/tutorial/multi-language/fr.ftl?raw&highlight';
	import deFtlSource from 'svelte-fluent-examples/src/tutorial/multi-language/de.ftl?raw&highlight';

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
		<dl>
			<dt>
				<label for="selected-locale">selectedLocale</label>
			</dt>
			<dd>
				<select id="selected-locale" bind:value={args.selectedLocale}>
					<option value="">auto</option>
					<option value="de">de</option>
					<option value="en">en</option>
					<option value="fr">fr</option>
				</select>
			</dd>
		</dl>
	{/snippet}
</ExampleRenderer>

<style lang="postcss">
	dl {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 2fr;
		align-items: start;
	}
</style>
