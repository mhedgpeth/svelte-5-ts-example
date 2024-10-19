import { describe, expect, test } from "vitest";
import { NormalCounter } from "./normal-counter.svelte";

describe("normal counter", () => {
  test("should default to zero", () => {
    const counter = new NormalCounter();
    expect(counter.count).toEqual(0);
  });

  test("should increment", () => {
    const counter = new NormalCounter();
    counter.increment();
    expect(counter.count).toEqual(1);
  });

  test("should decrement", () => {
    const counter = new NormalCounter();
    counter.decrement();
    expect(counter.count).toEqual(-1);
  });
});
