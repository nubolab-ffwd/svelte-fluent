<script lang="ts">
	import ExampleRenderer from '$lib/site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import componentSource from './Component.svelte?raw';
	import enFtlSource from './en.ftl?raw';

	const args = { productName: 'Example Product' };
</script>

<ExampleRenderer
	sources={{ 'Component.svelte': componentSource, 'en.ftl': enFtlSource }}
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
