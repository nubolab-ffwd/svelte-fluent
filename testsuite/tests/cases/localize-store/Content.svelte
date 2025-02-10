<script>
	import { getFluentContext } from '@nubolab-ffwd/svelte-fluent';

	const { localize } = getFluentContext();
</script>

<div id="plain">
	{localize('plain')}
	{localize('plain.attribute')}
</div>
<div id="with-vars">
	{localize('with-vars', { name: 'with variables' })}
	{localize('with-vars.attribute', { name: 'with variables' })}
</div>
