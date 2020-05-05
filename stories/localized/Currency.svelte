<script>
  import { FluentProvider, Localized } from '../../src'
  import { generateBundles } from '../utils'
  import { FluentNumber } from '@fluent/bundle'

  export let locale
  export let balance = 1

  const bundles = generateBundles(
    {
      de: 'current-balance = Ihr Kontostand beträgt { NUMBER($balance, currencyDisplay: "code", useGrouping: "false") }',
      en: 'current-balance = Your account balance is { NUMBER($balance, currencyDisplay: "code", useGrouping: "false") }'
    },
    'en',
    locale
  )
</script>

<FluentProvider {bundles}>
  <Localized
    id="current-balance"
    args={{ balance: new FluentNumber(balance, { style: 'currency', currency: 'EUR' }) }} />
</FluentProvider>
