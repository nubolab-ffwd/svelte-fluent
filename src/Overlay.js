import { get } from 'svelte/store'
import InternalOverlay from './internal/Overlay.svelte'
import { translateElement } from './internal/utils'
import { stores } from './FluentProvider.svelte'

let Overlay = InternalOverlay

if (!process.browser && InternalOverlay.$$render) {
  const { JSDOM } = require('jsdom')

  Overlay = function Overlay (...args) {
    return new InternalOverlay(...args)
  }

  Overlay.prototype = InternalOverlay
  Overlay.$$render = (result, props, bindings, slots) => {
    const html = InternalOverlay.$$render(result, props, bindings, slots)
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

export default Overlay
