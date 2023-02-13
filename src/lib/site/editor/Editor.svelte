<script lang="ts">
	import { AceEditor } from 'svelte-ace';
	import './editor-mode-fluent';
	import './editor-theme-nord_dark';
	import 'brace/theme/solarized_dark';

	export let text = '';
</script>

<AceEditor
	lang="fluent"
	theme="solarized_dark"
	bind:value={text}
	options={{
		maxLines: Infinity,
		fontFamily: 'var(--font-family-code)',
		fontSize: 'var(--font-size-code)'
	}}
	on:init={({ detail: editor }) => {
		editor.container.style.lineHeight = 'var(--ratio)';
		editor.renderer.updateFontSize();
		editor.renderer.setScrollMargin(10, 10);
	}}
/>
