<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import componentSource from './Component.svelte?raw';
	import enFtlSource from './en.ftl?raw';
	const args = { unreadEmails: 10 };
</script>

<ExampleRenderer
	sources={{ 'Component.svelte': componentSource, 'en.ftl': enFtlSource }}
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
