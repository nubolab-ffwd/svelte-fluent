<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { Localized, setSvelteFluent, createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

	export let userName = 'Anna';
	export let collection = 'public';
	export let photoCount = 3;

	const translations = `
# Simple things are simple.
hello-user = Hello, {$userName}!

# Complex things are possible.
shared-photos =
    {$userName} {$photoCount ->
        [one] added a new photo
       *[other] added {$photoCount} new photos
    } to {$collection ->
        [public] the public stream
        [private] a private album
       *[other] the shared collection
    }.
`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	setSvelteFluent(() => createSvelteFluent([bundle]));
</script>

<strong><Localized id="hello-user" args={{ userName }} /></strong>
<p>
	<Localized id="shared-photos" args={{ userName, collection, photoCount }} />
</p>
