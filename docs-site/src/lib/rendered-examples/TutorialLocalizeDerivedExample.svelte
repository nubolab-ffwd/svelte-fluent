<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/tutorial-localize-derived/App.svelte';
	import componentSource from '$lib/examples/tutorial-localize-derived/Component.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/tutorial-localize-derived/en.ftl?raw&highlight';
	import deFtlSource from '$lib/examples/tutorial-localize-derived/de.ftl?raw&highlight';

	const args = { locale: 'en' };
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true },
		'de.ftl': { code: deFtlSource, html: true }
	}}
>
	<App {...args} />
	{#snippet controls()}
		<dl>
			<dt>
				<label for="selected-locale">locale</label>
			</dt>
			<dd>
				<select id="selected-locale" bind:value={args.locale}>
					<option value="en">en</option>
					<option value="de">de</option>
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
