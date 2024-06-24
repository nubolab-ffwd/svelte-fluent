<script>
	import { FluentBundle } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext, Localized } from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';

	const bundle = new FluentBundle('en');
	bundle.addResource(resourceEn);

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<Localized id="login-input">
	{#snippet children({ text, attrs })}
		<label>
			{text}
			<input
				type="email"
				placeholder={attrs.placeholder}
				title={attrs.title}
				aria-label={attrs['aria-label']}
			/>
		</label>
	{/snippet}
</Localized>
