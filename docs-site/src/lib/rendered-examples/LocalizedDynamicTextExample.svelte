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
		<dl
			class="grid grid-cols-[auto_minmax(min-content,20rem)] place-content-start items-center gap-4"
		>
			<dt>
				<label class="label font-mono" for="localized-dynamic-text-unread-emails">
					<span class="label-text">unreadEmails</span>
				</label>
			</dt>
			<dd>
				<input
					class="input ring-surface-600"
					id="localized-dynamic-text-unread-emails"
					type="number"
					min="0"
					bind:value={args.unreadEmails}
				/>
			</dd>
		</dl>
	{/snippet}
</ExampleRenderer>
