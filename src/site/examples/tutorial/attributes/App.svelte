<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);
</script>

<FluentProvider bundles={[bundle]}>
	<Localized id="login-input" let:text let:attrs>
		<label>
			{text}
			<input
				type="email"
				placeholder={attrs.placeholder}
				title={attrs.title}
				aria-label={attrs['aria-label']}
			/>
		</label>
	</Localized>
</FluentProvider>
