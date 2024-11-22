<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "$lib/components/Counter.svelte";
  import BitsButton from "$lib/components/BitsButton.svelte";
  import SnippetComponent from "$lib/components/SnippetComponent.svelte";
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
  <Counter />
  <BitsButton />
  <SnippetComponent>
    {#snippet title()}My Title{/snippet}
    {#snippet body()}My Body{/snippet}
  </SnippetComponent>
</main>
