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
		<dl
			class="grid grid-cols-[auto_minmax(min-content,20rem)] place-content-start items-center gap-4"
		>
			<dt>
				<label class="label font-mono" for="frontpage-username">
					<span class="label-text">userName</span>
				</label>
			</dt>
			<dd>
				<input
					class="input ring-surface-600"
					id="frontpage-username"
					type="text"
					bind:value={args.userName}
				/>
			</dd>
			<dt>
				<label class="label font-mono" for="frontpage-usergender">
					<span class="label-text">userGender</span>
				</label>
			</dt>
			<dd>
				<select
					class="select ring-surface-600"
					id="frontpage-usergender"
					bind:value={args.userGender}
				>
					<option value="male">male</option>
					<option value="female">female</option>
					<option value="unspecified">unspecified</option>
				</select>
			</dd>
			<dt>
				<label class="label font-mono" for="frontpage-photocount">
					<span class="label-text">photoCount</span>
				</label>
			</dt>
			<dd>
				<input
					class="input accent-surface-50!"
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
