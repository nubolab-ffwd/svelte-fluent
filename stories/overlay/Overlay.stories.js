import OverlaySimple from './Simple.svelte'
import OverlayVariables from './Variables.svelte'

export default {
  title: 'Overlay',
  argTypes: {
    locale: {
      options: ['de', 'en'],
      control: { type: 'select' }
    }
  }
}

export const Simple = (args) => ({
  Component: OverlaySimple,
  props: args
})
Simple.args = { locale: 'en' }

export const Variables = (args) => ({
  Component: OverlayVariables,
  props: args
})
Variables.args = { locale: 'en', productName: 'Example Product' }
