import type { DatedCounter } from "$lib/components/dated-counter";

export class NormalCounter {
  counter = $state<DatedCounter>({ count: 0, date: new Date()});

  private constructor(values: DatedCounter) {
    this.counter = values;
  }
  
  public static async createInstance(values: DatedCounter): Promise<NormalCounter> {
    // simulating asynchronous, maybe it's that
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    await delay(20);
    // creating the counter
    const counter = new NormalCounter(values);
    return Promise.resolve(counter);
  }

  increment() {
    this.counter.count += 1;
    this.counter.date = new Date();
  }

  decrement() {
    this.counter.count -= 1;
    this.counter.date = new Date();
  }
}
