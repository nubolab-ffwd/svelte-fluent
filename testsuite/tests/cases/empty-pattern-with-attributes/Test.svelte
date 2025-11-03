<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, setSvelteFluent, useLocalize } from '@nubolab-ffwd/svelte-fluent';

	const translations = `
empty =
	.text = Some text
`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	setSvelteFluent(() => createSvelteFluent([bundle]));

	const localize = useLocalize();
</script>

{localize('empty.text')}
