<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/localized-dynamic-text/App.svelte';
	import componentSource from '$lib/examples/localized-dynamic-text/Component.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/localized-dynamic-text/en.ftl?raw&highlight';
	const args = { unreadEmails: 10 };
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
	{/snippet}
</ExampleRenderer>
