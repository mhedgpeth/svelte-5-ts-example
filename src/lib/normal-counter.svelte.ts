export class NormalCounter {
  count = $state(0);

  increment() {
    console.log("adding to count");
    this.count += 1;
    console.log(this.count);
  }

  decrement() {
    console.log("subtracting from count");
    this.count -= 1;
    console.log(this.count);
  }
}
