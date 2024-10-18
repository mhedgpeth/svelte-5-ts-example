<script lang="ts">
    import { NormalCounter } from "./normal-counter.svelte";
    let counter = new NormalCounter();

    // This works when I do it inside of the component:
    // let count = $state(0);
    // function increment() {
    //     count += 1;
    // }
    // function decrement() {
    //     count -= 1;
    // }
</script>

<!-- When using a class it doesn't work despite the docs saying so:  -->
<!-- see https://svelte-5-preview.vercel.app/docs/runes#$state -->
<button onclick={counter.increment}> + Add </button>
<button onclick={counter.decrement}> - Subtract </button>
<p>count is {counter.count}</p>

<!-- When inside of component it works: -->
<!-- <button onclick={increment}> + Add </button>
<button onclick={decrement}> - Subtract </button>
<p>count is {count}</p> -->
