<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	export let unreadEmails = 10;
</script>

<Localized id="emails" args={{ unreadEmails }} />
