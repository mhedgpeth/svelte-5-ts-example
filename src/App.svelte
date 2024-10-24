<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "$lib/components/Counter.svelte";
  import type { DatedCounter } from "$lib/components/dated-counter";
  import Button from "$lib/components/Button.svelte";

  let selectedIndex = $state(0);
  let counters = $state<DatedCounter[]>([{ count: 10, date: new Date()}]);
</script>

<div class="flex flex-col gap-2 md:flex-row">
  <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
    <img src={viteLogo} class="logo" alt="Vite Logo" />
  </a>
  <a href="https://svelte.dev" target="_blank" rel="noreferrer">
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </a>
</div>
<h1 class="text-xl">Vite + Svelte</h1>
<main>
  <Button onclick={() => counters.push({ count: 1, date: new Date() })}>Add Counter</Button>
  <Button onclick={() => selectedIndex = (selectedIndex + 1)}>Next Counter</Button>
  <Button onclick={() => selectedIndex = (selectedIndex - 1)}>Previous Counter</Button>

  {#each counters as counter, index}
    <div class={index === selectedIndex ? "bg-amber-600" : "bg-amber-50"}>
      <Counter {counter} />
    </div>
    {/each}
</main>
