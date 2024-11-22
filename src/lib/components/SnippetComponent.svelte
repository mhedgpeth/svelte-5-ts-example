<script lang="ts">
  import type { Snippet } from "svelte";

  interface SnippetComponentProps {
    title: Snippet,
    body: Snippet,
  }
  let { title, body }: SnippetComponentProps = $props();

</script>

<h1>{@render title()}</h1>
<p>{@render body()}</p>
