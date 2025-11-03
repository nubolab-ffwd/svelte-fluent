<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, setSvelteFluent } from '@nubolab-ffwd/svelte-fluent';
	import Content from './Content.svelte';

	const translations = `
plain = Test
	.attribute = Attribute
with-vars = Test {$name}
	.attribute = Attribute {$name}
`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	setSvelteFluent(() => createSvelteFluent([bundle]));
</script>

<Content />
