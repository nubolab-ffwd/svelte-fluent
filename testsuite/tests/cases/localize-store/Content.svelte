<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';
	const localize = useLocalize();
</script>

<div id="plain">
	{localize('plain')}
	{localize('plain.attribute')}
</div>
<div id="with-vars">
	{localize('with-vars', { name: 'with variables' })}
	{localize('with-vars.attribute', { name: 'with variables' })}
</div>
