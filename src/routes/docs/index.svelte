<script lang="ts" context="module">
	import type { Load } from './__types';

	export const load: Load = () => {
		return {
			redirect: '/docs/getting-started',
			status: 302
		};
	};
</script>
