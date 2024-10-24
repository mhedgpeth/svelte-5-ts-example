<script lang="ts">
  import Button from "./Button.svelte";
  import { NormalCounter } from "./normal-counter.svelte";
  import type { DatedCounter } from "$lib/components/dated-counter";

  let { counter}: { counter: DatedCounter } = $props();

  async function load() {
    return await NormalCounter.createInstance(counter);
  }

</script>
{#await load() then counter}
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-2 md:flex-row">
      <Button
        dataTestId="increment-button"
        onclick={() => {
        counter.increment();
      }}
      >
        + Add
      </Button>
      <Button
        dataTestId="decrement-button"
        onclick={() => {
        counter.decrement();
      }}
      >
        - Subtract
      </Button>
    </div>
    <p data-testid="output">count is {counter.counter.count}</p>
    <p data-testid="output">date is {counter.counter.date}</p>
  </div>
{/await}
