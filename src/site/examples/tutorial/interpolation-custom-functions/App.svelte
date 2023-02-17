<script>
	import {
		FluentBundle,
		FluentDateTime,
		FluentNone,
		FluentNumber,
		FluentResource
	} from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';

	function values(opts, allowed) {
		const unwrapped = Object.create(null);
		for (const [name, opt] of Object.entries(opts)) {
			if (allowed.includes(name)) {
				unwrapped[name] = opt.valueOf();
			}
		}
		return unwrapped;
	}

	const WEEKDAY_ALLOWED = ['weekday'];

	function WEEKDAY(args, opts) {
		const arg = args[0];

		if (arg instanceof FluentNone) {
			return new FluentNone(`WEEKDAY(${arg.valueOf()})`);
		}

		if (arg instanceof FluentDateTime) {
			return new FluentDateTime(arg.valueOf(), {
				...values(arg.opts, WEEKDAY_ALLOWED),
				...values(opts, WEEKDAY_ALLOWED)
			});
		}

		if (arg instanceof FluentNumber) {
			const date = new Date(Date.now());
			const offset = arg.valueOf() - date.getDay();
			date.setDate(date.getDate() + offset);
			return new FluentDateTime(date.valueOf(), {
				weekday: 'long',
				...values(opts, WEEKDAY_ALLOWED)
			});
		}

		throw new TypeError('Invalid argument to WEEKDAY');
	}

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en', { functions: { WEEKDAY } });
	bundle.addResource(resource);
</script>

<FluentProvider bundles={[bundle]}>
	<Localized id="weekday-is" args={{ weekday: 2 }} />
</FluentProvider>
