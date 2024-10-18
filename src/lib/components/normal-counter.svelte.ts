export class NormalCounter {
  count = $state(0);

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
