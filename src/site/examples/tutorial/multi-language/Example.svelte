<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import appSource from './App.svelte?raw&highlight';
	import enFtlSource from './en.ftl?raw&highlight';
	import frFtlSource from './fr.ftl?raw&highlight';
	import deFtlSource from './de.ftl?raw&highlight';

	const args = { selectedLocale: '' };
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true },
		'en.ftl': { code: enFtlSource, html: true },
		'fr.ftl': { code: frFtlSource, html: true },
		'de.ftl': { code: deFtlSource, html: true }
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
