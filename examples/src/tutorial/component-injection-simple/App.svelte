<script>
	import { FluentBundle } from '@fluent/bundle';
	import {
		createSvelteFluent,
		initFluentContext,
		Localized,
		ComponentElement
	} from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';
	import GoogleIcon from '~icons/logos/google-icon';

	const bundle = new FluentBundle('en');
	bundle.addResource(resourceEn);

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<Localized
	id="google-login-button"
	tag="button"
	elements={{
		'google-icon': new ComponentElement(GoogleIcon)
	}}
/>
