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
  $: attrs = msg && msg.attributes
    ? Object.fromEntries(Object.entries(msg.attributes || {}).map(
        ([name, pattern]) => ([name, bundle.formatPattern(pattern, args)]))
      )
    : null

  $: if (!id) console.error('missing id prop in <Localized/>')
</script>

<slot {text} {attrs}>
  {text}
</slot>
