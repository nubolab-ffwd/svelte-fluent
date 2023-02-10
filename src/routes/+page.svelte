<script lang="ts">
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '$lib';
	import Editor from '$lib/site/editor';

	let ftlSource = `# Simple things are simple.
hello-user = Hello, {$userName}!

# Complex things are possible.
shared-photos =
    {$userName} {$photoCount ->
        [one] added a new photo
       *[other] added {$photoCount} new photos
    } to {$userGender ->
        [male] his stream
        [female] her stream
       *[other] their stream
    }.
`;

	const ftlArgs = {
		userName: 'Anna',
		userGender: 'female',
		photoCount: 3
	};

	let bundle: FluentBundle;
	$: {
		bundle = new FluentBundle('en');
		bundle.addResource(new FluentResource(ftlSource));
	}
</script>

<div class="center with-gutters">
	<div class="stack">
		<h1>Svelte Fluent</h1>
		<p>
			Localize your Svelte applications with the <a href="https://projectfluent.org/">
				Fluent localisation system
			</a>.
		</p>

		<h2>Try it out</h2>
		<div>
			<Editor bind:text={ftlSource} />
		</div>

		<div class="variables">
			<label>$userName <input type="text" bind:value={ftlArgs.userName} /></label>
			<label>
				$userGender
				<select bind:value={ftlArgs.userGender}>
					<option value="male">male</option>
					<option value="female">female</option>
					<option value="unspecified">unspecified</option>
				</select>
			</label>
			<label
				>$photoCount <input type="range" min="1" max="9" bind:value={ftlArgs.photoCount} /></label
			>
		</div>

		<FluentProvider bundles={[bundle]}>
			<dl class="results">
				<dt>hello-user</dt>
				<dd><Localized id="hello-user" args={ftlArgs} /></dd>
				<dt>shared-photos</dt>
				<dd><Localized id="shared-photos" args={ftlArgs} /></dd>
			</dl>
		</FluentProvider>
	</div>
</div>

<style lang="postcss">
	.results {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr 2fr;
		align-items: start;
	}
</style>
