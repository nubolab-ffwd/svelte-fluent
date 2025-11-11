<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';

	const localize = useLocalize();

	// This variable is NOT reactive. It is only set once when the component initializes.
	const messageWithoutDerived = localize('message');

	// This variable is reactive. It will update when the language changes.
	const messageWithDerived = $derived(localize('message'));
</script>

<p>
	❌ Message without <code>$derived</code>: <strong>{messageWithoutDerived}</strong>
</p>

<p>
	✅ Message with <code>$derived</code>: <strong>{messageWithDerived}</strong>
</p>
