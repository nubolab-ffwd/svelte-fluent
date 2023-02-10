<script lang="ts">
	import { AceEditor } from 'svelte-ace';
	import './editor-mode-fluent';
	import './editor-theme-nord_dark';

	export let text = '';
</script>

<AceEditor
	lang="fluent"
	theme="nord_dark"
	bind:value={text}
	options={{
		maxLines: Infinity
	}}
/>
