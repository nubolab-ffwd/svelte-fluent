import { get } from 'svelte/store'
import Overlay from './Overlay.svelte'
import { translateElement } from './utils'
import { stores } from './FluentProvider.svelte'
import { JSDOM } from 'jsdom'

const OverlaySSR = {
  ...Overlay,
  $$render(result, props, bindings, slots) {
    const html = Overlay.$$render.call(this, result, props, bindings, slots)
    const { getTranslation } = stores()
    const { id, args } = props
    const $getTranslation = get(getTranslation)
    const translation = $getTranslation(id, args)
    const { document } = new JSDOM('<!DOCTYPE html>').window
    const body = document.createElement('body')
    body.innerHTML = html
    const rootNode = body.firstChild
    translateElement(rootNode, translation)
    return body.innerHTML
  }
}

export default OverlaySSR
