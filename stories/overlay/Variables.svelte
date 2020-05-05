<script>
  import { FluentProvider, Overlay } from '../../src'
  import { generateBundles } from '../utils'
  export let locale
  export let productName
  const bundles = generateBundles(
    {
      de: `
download-info =
  Sie können { $productName } herunterladen, indem Sie auf die
  Schaltfläche Download klicken, oder lesen Sie die
  <a data-l10n-name='release-notes'>Versionshinweise</a>, um mehr zu erfahren.
`,
      en: `
download-info =
  You can download { $productName } by clicking
  on the <strong>Download</strong> button or read
  the <a data-l10n-name='release-notes'>release notes</a> to learn more.
`
    },
    'en',
    locale
  )
</script>

<FluentProvider {bundles}>
  <Overlay id="download-info" args={{ productName }}>
    <a data-l10n-name="release-notes" href="https://example.com/" target="_blank"><!-- prevent a11y warning --></a>
  </Overlay>
</FluentProvider>
