<script lang="ts">
  import Button from "./Button.svelte";
  import { NormalCounter } from "./normal-counter.svelte";
  let counter = new NormalCounter();
</script>

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
  <p data-testid="output">count is {counter.count}</p>
</div>
