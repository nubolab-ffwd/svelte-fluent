<script>
  import { formatString } from "../FluentProvider.svelte";
  export let id;
  $: text = id ? $formatString(id) : id;
</script>

{text}
