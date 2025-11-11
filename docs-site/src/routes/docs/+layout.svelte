<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import PrevNext from './PrevNext.svelte';
	import Menu from './Menu.svelte';
	import { page } from '$app/state';
	import { findActiveMenuItem } from './menu';
	import Logo from '$lib/logo.svelte';
	import { resolve } from '$app/paths';
	import LightSwitch from '$lib/LightSwitch.svelte';
	import IconGitHub from '~icons/mdi/github';
	import NavDrawer from './NavDrawer.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let activeMenu = $derived(findActiveMenuItem(data.menu, page.url.pathname, page.url.hash));
</script>

{#snippet sidebarContent()}
	<div class="grid h-full grid-rows-[auto_1fr]">
		<div class="h-(--header-height) flex items-center px-4">
			<a href={resolve('/')} class="flex items-center gap-2">
				<div class="w-16">
					<Logo />
				</div>
				<span class="font-bold">svelte-fluent</span>
			</a>
		</div>
		<div class="mb-4 mt-10 overflow-y-auto px-4">
			<Menu items={data.menu} activeMenuPath={activeMenu.path} />
		</div>
	</div>
{/snippet}

<div class="docs-layout min-h-screen">
	<div class="[grid-area:sidebar]">
		<div class="bg-surface-100-900 sticky top-0 h-screen w-72 max-md:hidden">
			<nav aria-label="Docs" class="h-full">
				{@render sidebarContent()}
			</nav>
		</div>
	</div>
	<div class="h-(--header-height) z-1 sticky top-0 isolate [grid-area:content-header]">
		<div class="bg-surface-100-900 flex h-full items-center justify-between px-4 py-2">
			<div>
				<div class="md:hidden">
					<NavDrawer>
						{@render sidebarContent()}
					</NavDrawer>
				</div>
			</div>
			<div class="flex items-center gap-1">
				<LightSwitch />
				<a
					class="btn-icon hover:preset-tonal"
					href="https://github.com/nubolab-ffwd/svelte-fluent"
					target="_blank"
					rel="noreferrer noopener"
					title="View on GitHub"
				>
					<IconGitHub />
				</a>
			</div>
		</div>
	</div>
	<div class="[grid-area:content]">
		<div class="bg-surface-100-900 top-(--header-height) sticky hidden h-4 md:block">
			<div
				class="bg-(--body-background-color) dark:bg-(--body-background-color-dark) h-full rounded-ss-full"
			></div>
		</div>
		<main
			class="breakout-grid **:[[id]]:scroll-mt-(--header-height) md:**:[[id]]:scroll-mt-[calc(var(--header-height)+--spacing(4))] relative isolate mt-10 gap-y-4 overflow-clip px-4 md:mt-6"
			style:--max-content-width="var(--container-4xl)"
		>
			{@render children()}
		</main>
	</div>
	<div class="[grid-area:content-footer]">
		<div class="my-18 mx-auto box-content max-w-4xl space-y-4 px-4">
			<hr class="hr" />
			<nav>
				<!--eslint-disable-next-line svelte/valid-compile -- https://github.com/sveltejs/eslint-plugin-svelte/issues/652 -->
				<PrevNext menu={data.menu} activeMenuPath={activeMenu.path} />
			</nav>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "../../app.css";

	.docs-layout {
		display: grid;
		grid:
			'sidebar' auto
			'content-header' auto
			'content' 1fr
			'content-footer' auto
			/ minmax(0, 1fr);

		@variant md {
			grid:
				'sidebar content-header' auto
				'sidebar content' 1fr
				'sidebar content-footer' auto
				/ auto minmax(0, 1fr);
		}
	}
</style>
