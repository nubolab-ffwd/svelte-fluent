<script>
	import { FluentBundle } from '@fluent/bundle';
	import {
		createSvelteFluent,
		initFluentContext,
		Localized,
		ComponentElement
	} from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';
	import Outline from './Outline.svelte';

	const bundle = new FluentBundle('en');
	bundle.addResource(resourceEn);

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<p>
	<Localized
		id="outlined-text-default"
		elements={{
			outline: new ComponentElement(Outline, (attributes) => ({
				color: attributes.color
			}))
		}}
	/>
</p>

<p style="margin-block-start: 1rem;">
	<Localized
		id="outlined-text-blue"
		elements={{
			outline: new ComponentElement(Outline, (attributes) => ({
				color: attributes.color
			}))
		}}
	/>
</p>
