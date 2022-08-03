<script>
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import { generateBundles } from '../utils';
	export let locale;
	export let unreadEmails = 0;
	const bundles = generateBundles(
		{
			de: `
emails =
  { $unreadEmails ->
    [one] Du hast eine ungelesene E-Mail.
    *[other] Du hast { $unreadEmails } ungelesene E-Mails.
  }
`,
			en: `
emails =
  { $unreadEmails ->
    [one] You have one unread email.
    *[other] You have { $unreadEmails } unread emails.
  }
`
		},
		'en',
		locale
	);
</script>

<FluentProvider {bundles}>
	<Localized id="emails" args={{ unreadEmails }} />
</FluentProvider>
