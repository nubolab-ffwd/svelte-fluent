<script>
	import { Localized, ComponentElement } from '@nubolab-ffwd/svelte-fluent';
	import Outline from './Outline.svelte';
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

<p>
	<Localized
		id="outlined-text-blue"
		elements={{
			outline: new ComponentElement(Outline, (attributes) => ({
				color: attributes.color
			}))
		}}
	/>
</p>
