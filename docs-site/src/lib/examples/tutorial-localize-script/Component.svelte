<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';
	import Notifications from './Notifications.svelte';

	const localize = useLocalize();

	let notifications; // This will be bound to the Notifications component instance

	function addToCart(itemName) {
		// `localize` is used here to get the string for the toast notification
		const message = localize('item-added', { itemName });
		notifications.show(message);
	}
</script>

<button onclick={() => addToCart('Svelte T-Shirt')}>Add to Cart</button>

<Notifications bind:this={notifications} />
