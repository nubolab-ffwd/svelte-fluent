<script>
  import { onMount } from 'svelte'
  import { stores } from './FluentProvider.svelte'
  import { translateElement } from './utils'

  // props are also consumed in `../Overlay.js`. Changes made here need to be reflected there
  export let id
  export let args = null

  let root
  let translatedRoot

  const { getTranslation } = stores()

  $: translation = $getTranslation(id, args)
  $: update(translation, id, args)

  function update (translation, id, args) {
    if (translation && root && translatedRoot) {
      const newRoot = root.cloneNode(true)
      translateElement(newRoot, translation)
      translatedRoot.parentNode.replaceChild(newRoot, translatedRoot)
      translatedRoot = newRoot
    }
  }

  onMount(() => {
    const observer = new MutationObserver(() => {
      update(translation, id, args)
    })
    if (root && translation) {
      translatedRoot = root.cloneNode(true)
      translateElement(translatedRoot, translation)
      root.parentNode.replaceChild(translatedRoot, root)
      observer.observe(root, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
      })
    }
    return () => {
      observer.disconnect()
      if (translatedRoot) {
        translatedRoot.parentNode.replaceChild(root, translatedRoot)
      }
    }
  })
</script>

<span bind:this={root}>
  <slot />
</span>
