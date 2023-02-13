<script lang="ts">
	import ExampleRenderer from '$lib/site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import appSource from './App.svelte?raw';

	const args = {
		userName: 'Anna',
		userGender: 'female',
		photoCount: 3
	};
</script>

<ExampleRenderer
	hideFilepath
	sources={{ 'App.svelte': appSource }}
	component={appComponent}
	componentArgs={args}
>
	<dl slot="controls">
		<dt><label for="frontpage-username">$userName</label></dt>
		<dd><input id="frontpage-username" type="text" bind:value={args.userName} /></dd>
		<dt><label for="frontpage-usergender">$userGender</label></dt>
		<dd>
			<select id="frontpage-usergender" bind:value={args.userGender}>
				<option value="male">male</option>
				<option value="female">female</option>
				<option value="unspecified">unspecified</option>
			</select>
		</dd>
		<dt><label for="frontpage-photocount">$photoCount</label></dt>
		<dd>
			<input id="frontpage-photocount" type="range" min="1" max="9" bind:value={args.photoCount} />
		</dd>
	</dl>
</ExampleRenderer>

<style lang="postcss">
	dl {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 2fr;
		align-items: start;
	}
</style>
