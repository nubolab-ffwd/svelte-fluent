import { getOverlayImpl, setDOMProvider } from './internal/Overlay'
export { default as Localized } from './internal/Localized.svelte'
export { default as FluentProvider } from './internal/FluentProvider.svelte'

export const Overlay = getOverlayImpl(import.meta.env.SSR)

if (import.meta.env.SSR) {
  import('jsdom').then(({ default: { JSDOM } }) => setDOMProvider(JSDOM))
}
