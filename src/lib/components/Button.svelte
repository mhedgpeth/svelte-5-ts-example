<script lang="ts">
  import type { Snippet } from "svelte";

  interface ButtonProps {
    dataTestId?: string;
    onclick?: () => void;
    children: Snippet;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let { dataTestId, onclick, children }: ButtonProps = $props();
</script>

<button
  class="ring-offset-background text-black-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-black bg-slate-300 p-2 text-sm font-medium transition-colors hover:bg-slate-400/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  data-testid={dataTestId}
  {onclick}
>
  {@render children()}
</button>
