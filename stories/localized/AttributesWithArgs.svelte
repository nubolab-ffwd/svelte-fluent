<script>
  import { FluentProvider, Localized } from '../../src'
  import { generateBundles } from '../utils'
  export let locale
  const bundles = generateBundles(
    {
      de: `
confirm = Möchten Sie alle Ihre E-Mails löschen?
  .ok     = Ja, alle { $count } E-Mails löschen
  .cancel = Nein
`,
      en: `
confirm = Do you want to delete all your emails?
  .ok     = Yes, delete all { $count } emails
  .cancel = No
`
    },
    'en',
    locale
  )
</script>

<FluentProvider {bundles}>
  <Localized id="confirm" let:text let:attrs args={{ count: 10000 }}>
    {text}
    <button on:click={() => alert('OK clicked')}>{attrs.ok}</button>
    <button on:click={() => alert('Cancel clicked')}>{attrs.cancel}</button>
  </Localized>
</FluentProvider>
