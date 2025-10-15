<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/overlay/dynamic-text/App.svelte';
	import componentSource from '$lib/examples/overlay/dynamic-text/Component.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/overlay/dynamic-text/en.ftl?raw&highlight';

	const args = { productName: 'Example Product' };
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App {...args} />
	{#snippet controls()}
		<dl>
			<dt>
				<label for="overlay-dynamic-text-product-name">productName</label>
			</dt>
			<dd>
				<input id="overlay-dynamic-text-product-name" bind:value={args.productName} />
			</dd>
		</dl>
	{/snippet}
</ExampleRenderer>
