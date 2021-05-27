import { get } from 'svelte/store'
import Overlay from './Overlay.svelte'
import { translateElement } from './utils'
import { stores } from './FluentProvider.svelte'

let DOM

export function getOverlayImpl (ssr) {
  if (!ssr || !Overlay.$$render) { return Overlay }
  function OverlaySSR (...args) {
    return new Overlay(...args)
  }
  OverlaySSR.prototype = Overlay
  OverlaySSR.$$render = (result, props, bindings, slots) => {
    const html = Overlay.$$render(result, props, bindings, slots)
    const { getTranslation } = stores()
    const { id, args } = props
    const $getTranslation = get(getTranslation)
    const translation = $getTranslation(id, args)
    const { document } = new DOM('<!DOCTYPE html>').window
    const body = document.createElement('body')
    body.innerHTML = html
    const rootNode = body.firstChild
    translateElement(rootNode, translation)
    return body.innerHTML
  }
  return OverlaySSR
}

export function setDOMProvider (provider) {
  DOM = provider
}
