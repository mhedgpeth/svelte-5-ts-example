<script lang="ts">
    import { NormalCounter } from "./normal-counter.svelte";
    let counter = new NormalCounter();
</script>

<button
    data-testid='increment-button'
    onclick={() => {
        counter.increment();
    }}
>
    + Add
</button>
<button
    data-testid='decrement-button'
    onclick={() => {
        counter.decrement();
    }}
>
    - Subtract
</button>
<p data-testid='output'>count is {counter.count}</p>
