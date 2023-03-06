<script>
	import { localize } from '@nubolab-ffwd/svelte-fluent';
</script>

<div id="plain">
	{$localize('plain')}
	{$localize('plain.attribute')}
</div>
<div id="with-vars">
	{$localize('with-vars', { name: 'with variables' })}
	{$localize('with-vars.attribute', { name: 'with variables' })}
</div>
7
