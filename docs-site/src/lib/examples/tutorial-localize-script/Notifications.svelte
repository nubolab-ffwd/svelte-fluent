<script>
	let notifications = $state([]);
	let count = 0;

	export function show(message, timeout = 3000) {
		const id = count++;
		notifications.push({ id, message });
		setTimeout(() => {
			notifications = notifications.filter((n) => n.id !== id);
		}, timeout);
	}
</script>

<div class="toast-container">
	{#each notifications as notification (notification.id)}
		<div class="toast">
			{notification.message}
		</div>
	{/each}
</div>

<style>
	.toast-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.toast {
		background-color: #333;
		color: white;
		padding: 0.75rem 1rem;
		border-radius: 0.25rem;
		animation:
			fadein 0.5s,
			fadeout 0.5s 2.5s;
	}

	@keyframes fadein {
		from {
			bottom: 0;
			opacity: 0;
		}
		to {
			bottom: 30px;
			opacity: 1;
		}
	}

	@keyframes fadeout {
		from {
			bottom: 30px;
			opacity: 1;
		}
		to {
			bottom: 0;
			opacity: 0;
		}
	}
</style>
