<script>
	import { Localized, ComponentElement } from '@nubolab-ffwd/svelte-fluent';
	import GoogleIcon from '~icons/logos/google-icon';
</script>

<Localized
	id="google-login-button"
	tag="button"
	elements={{
		'google-icon': new ComponentElement(GoogleIcon)
	}}
/>
