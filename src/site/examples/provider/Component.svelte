<script>
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

	export let bundles;
</script>

<FluentProvider {bundles}>
	<Localized id="hello" />
</FluentProvider>
