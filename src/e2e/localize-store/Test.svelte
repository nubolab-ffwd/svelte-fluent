<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider } from '@nubolab-ffwd/svelte-fluent';
	import Content from './Content.svelte';

	const translations = `
plain = Test
	.attribute = Attribute
with-vars = Test {$name}
	.attribute = Attribute {$name}
`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
</script>

<FluentProvider bundles={[bundle]}>
	<Content />
</FluentProvider>
