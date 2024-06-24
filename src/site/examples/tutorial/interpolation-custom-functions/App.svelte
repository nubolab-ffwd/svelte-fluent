<script>
	import { FluentBundle, FluentDateTime, FluentNone, FluentNumber } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext, Localized } from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function WEEKDAY(args, opts) {
		const arg = args[0];

		if (arg instanceof FluentNone) {
			return new FluentNone(`WEEKDAY(${arg.valueOf()})`);
		}

		if (arg instanceof FluentNumber) {
			const date = new Date(Date.now());
			const offset = arg.valueOf() - date.getDay();
			date.setDate(date.getDate() + offset);
			return new FluentDateTime(date.valueOf(), {
				weekday: 'long'
			});
		}

		if (arg instanceof FluentDateTime) {
			return new FluentDateTime(arg.valueOf(), {
				weekday: 'long'
			});
		}

		throw new TypeError('Invalid argument to WEEKDAY');
	}

	const bundle = new FluentBundle('en', { functions: { WEEKDAY } });
	bundle.addResource(resourceEn);

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<div>
	<Localized id="weekday-number" args={{ weekday: 2 }} />
</div>
<div>
	<Localized id="weekday-date" args={{ date: new Date(2024, 1, 6) }} />
</div>
