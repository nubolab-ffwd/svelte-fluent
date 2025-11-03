<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { Localized, setSvelteFluent, createSvelteFluent } from '@nubolab-ffwd/svelte-fluent';

	export let userName = 'Anna';
	export let userGender = 'female';
	export let photoCount = 3;

	const translations = `
# Simple things are simple.
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
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	setSvelteFluent(() => createSvelteFluent([bundle]));
</script>

<strong><Localized id="hello-user" args={{ userName }} /></strong>
<p>
	<Localized id="shared-photos" args={{ userName, userGender, photoCount }} />
</p>
