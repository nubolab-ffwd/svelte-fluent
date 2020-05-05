import LocalizedSimple from './Simple.svelte'
import LocalizedVariables from './Variables.svelte'
import LocalizedCurrency from './Currency.svelte'
import LocalizedAttributes from './Attributes.svelte'
import { withKnobs, select, number } from '@storybook/addon-knobs'

export default {
  title: 'Localized',
  decorators: [withKnobs]
}

export const Simple = () => ({
  Component: LocalizedSimple,
  props: {
    locale: select('Locale', ['de', 'en', 'fr', 'pl'], 'en')
  }
})

export const Variables = () => ({
  Component: LocalizedVariables,
  props: {
    locale: select('Locale', ['de', 'en'], 'en'),
    unreadEmails: number('Unread emails', 1, { range: true, min: 1 })
  }
})

export const Currency = () => ({
  Component: LocalizedCurrency,
  props: {
    locale: select('Locale', ['de', 'en'], 'en'),
    balance: number('Account balance', 24.99, { min: 1 })
  }
})

export const Attributes = () => ({
  Component: LocalizedAttributes,
  props: {
    locale: select('Locale', ['de', 'en'], 'en')
  }
})
