<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import componentSource from './Component.svelte?raw&highlight';
	import enFtlSource from './en.ftl?raw&highlight';
	const args = { unreadEmails: 10 };
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
			<label for="localized-dynamic-text-unread-emails">unreadEmails</label>
		</dt>
		<dd>
			<input
				id="localized-dynamic-text-unread-emails"
				type="number"
				bind:value={args.unreadEmails}
			/>
		</dd>
	</dl>
</ExampleRenderer>
