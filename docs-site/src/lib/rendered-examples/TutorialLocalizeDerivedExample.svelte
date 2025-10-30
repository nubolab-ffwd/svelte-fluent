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
		<dl
			class="grid grid-cols-[auto_minmax(min-content,20rem)] place-content-start items-center gap-4"
		>
			<dt>
				<label class="label font-mono" for="selected-locale">
					<span class="label-text">locale</span>
				</label>
			</dt>
			<dd>
				<select class="select ring-surface-600" id="selected-locale" bind:value={args.locale}>
					<option value="en">en</option>
					<option value="de">de</option>
				</select>
			</dd>
		</dl>
	{/snippet}
</ExampleRenderer>
