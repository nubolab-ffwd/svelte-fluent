<script lang="ts">
	export let menu: { text: string; href: string }[];
	import { page } from '$app/stores';

	$: currentIdx = menu.findIndex((x) => $page.url.pathname.startsWith(x.href));
	$: prev = currentIdx > 0 ? menu[currentIdx - 1] : null;
	$: next = menu.length > currentIdx + 1 ? menu[currentIdx + 1] : null;
</script>

<div class="prev-next">
	{#if prev}
		<a class="prev" href={prev?.href}>
			<span class="desc"><strong>Previous page</strong></span>
			<span class="text">{prev?.text}</span>
		</a>
	{:else}
		<div />
	{/if}
	{#if next}
		<a class="next" href={next?.href}>
			<span class="desc"><strong>Next page</strong></span>
			<span class="text">{next?.text}</span>
		</a>
	{:else}
		<div />
	{/if}
</div>

<style lang="postcss">
	.prev-next {
		display: flex;
		gap: var(--space);
		& * {
			max-width: none;
		}
		& > * {
			flex: 1 1 50%;
			&:last-child {
				text-align: end;
			}
		}
		& a {
			border: 1px solid var(--theme-color-gray-light);
			padding: var(--space);
			border-radius: var(--s-2);

			&:hover {
				border-color: var(--theme-color-tertiary-dark);
			}
			& .desc,
			& .text {
				display: block;
			}
			& .desc {
				color: var(--theme-color-text);
			}
		}
	}
</style>
