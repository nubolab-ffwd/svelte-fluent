<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, setSvelteFluent, Localized } from '@nubolab-ffwd/svelte-fluent';

	let { userName = 'Anna', userGender = 'female', photoCount = 3 } = $props();

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

<strong>
	<Localized id="hello-user" args={{ userName }} />
</strong>

<p>
	<Localized id="shared-photos" args={{ userName, userGender, photoCount }} />
</p>
