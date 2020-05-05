import OverlaySimple from './Simple.svelte'
import OverlayVariables from './Variables.svelte'
import { withKnobs, select, text } from '@storybook/addon-knobs'

export default {
  title: 'Overlay',
  decorators: [withKnobs]
}

export const Simple = () => ({
  Component: OverlaySimple,
  props: {
    locale: select('Locale', ['de', 'en'], 'en')
  }
})

export const Variables = () => ({
  Component: OverlayVariables,
  props: {
    locale: select('Locale', ['de', 'en'], 'en'),
    productName: text('Product name', 'Example Product')
  }
})
