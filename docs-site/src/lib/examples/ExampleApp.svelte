<script lang="ts">
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext } from '@nubolab-ffwd/svelte-fluent';
	import type { Snippet } from 'svelte';

	interface Props {
		resource: FluentResource;
		locale?: string;
		children?: Snippet;
	}
	let { resource, locale = 'en', children }: Props = $props();

	let bundle = $derived.by(() => {
		const bundle = new FluentBundle(locale);
		bundle.addResource(resource);
		return bundle;
	});

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<div class="space-y-2">
	{@render children?.()}
</div>
