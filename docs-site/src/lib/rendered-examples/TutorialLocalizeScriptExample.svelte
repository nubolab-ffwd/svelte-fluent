<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/tutorial-localize-script/App.svelte';
	import componentSource from '$lib/examples/tutorial-localize-script/Component.svelte?raw&highlight';
	import notificationsSource from '$lib/examples/tutorial-localize-script/Notifications.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/tutorial-localize-script/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true },
		'Notifications.svelte': { code: notificationsSource, html: true, collapsed: true }
	}}
>
	<App />
</ExampleRenderer>
