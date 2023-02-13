<script lang="ts">
	import ExampleRenderer from '$lib/site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import appSource from './App.svelte?raw';
	import enFtlSource from './en.ftl?raw';
	import frFtlSource from './fr.ftl?raw';
	import deFtlSource from './de.ftl?raw';

	const args = { selectedLocale: '' };
</script>

<ExampleRenderer
	sources={{
		'App.svelte': appSource,
		'en.ftl': enFtlSource,
		'fr.ftl': frFtlSource,
		'de.ftl': deFtlSource
	}}
	component={appComponent}
	componentArgs={args}
>
	<dl slot="controls">
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
</ExampleRenderer>

<style lang="postcss">
	dl {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 2fr;
		align-items: start;
	}
</style>
