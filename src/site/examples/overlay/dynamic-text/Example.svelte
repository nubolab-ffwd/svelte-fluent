<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import componentSource from './Component.svelte?raw&highlight';
	import enFtlSource from './en.ftl?raw&highlight';

	const args = { productName: 'Example Product' };
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
	component={appComponent}
	componentArgs={args}
>
	<dl slot="controls">
		<dt>
			<label for="overlay-dynamic-text-product-name">productName</label>
		</dt>
		<dd>
			<input id="overlay-dynamic-text-product-name" bind:value={args.productName} />
		</dd>
	</dl>
</ExampleRenderer>
