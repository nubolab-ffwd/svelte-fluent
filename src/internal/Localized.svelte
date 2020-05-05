<script>
  import { stores } from '../FluentProvider.svelte'
  export let id
  export let args = null

  let bundle
  let msg
  let text = ''

  const { getBundle } = stores()

  $: bundle = id ? $getBundle(id) : null
  $: msg = bundle ? bundle.getMessage(id) : null
  $: text = msg ? bundle.formatPattern(msg.value, args) : ''

  $: if (!id) console.error('missing id prop in <Localized/>')
</script>

<slot {text} attrs={msg ? msg.attributes : null}>
  {text}
</slot>
