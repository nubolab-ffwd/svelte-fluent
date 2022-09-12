<script lang="ts">
	import { AceEditor } from 'svelte-ace';
	import './editor-mode-fluent';
	import './editor-theme-nord_dark';

	export let text = '';
	export let width = 'auto';
	export let height = '500px';
</script>

<AceEditor {width} {height} lang="fluent" theme="nord_dark" bind:value={text} />
