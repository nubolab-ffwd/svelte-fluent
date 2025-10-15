<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/frontpage/App.svelte';
	import appSource from '$lib/examples/frontpage/App.svelte?raw&highlight';

	const args = {
		userName: 'Anna',
		userGender: 'female',
		photoCount: 3
	};
</script>

<ExampleRenderer sources={{ 'App.svelte': { code: appSource, html: true } }}>
	<App {...args} />
	{#snippet controls()}
		<dl style:--space="var(--s-2)">
			<dt><label for="frontpage-username">userName</label></dt>
			<dd><input id="frontpage-username" type="text" bind:value={args.userName} /></dd>
			<dt><label for="frontpage-usergender">userGender</label></dt>
			<dd>
				<select id="frontpage-usergender" bind:value={args.userGender}>
					<option value="male">male</option>
					<option value="female">female</option>
					<option value="unspecified">unspecified</option>
				</select>
			</dd>
			<dt><label for="frontpage-photocount">photoCount</label></dt>
			<dd>
				<input
					id="frontpage-photocount"
					type="range"
					min="1"
					max="9"
					bind:value={args.photoCount}
				/>
			</dd>
		</dl>
	{/snippet}
</ExampleRenderer>
