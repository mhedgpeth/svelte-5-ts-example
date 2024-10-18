import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter.svelte";

describe("Counter Component", () => {
  it("renders the initial count", () => {
    render(Counter);
    const output = screen.getByTestId("output");
    expect(output.textContent).toBe("count is 0");
  });

  it("increments the count when the add button is clicked", async () => {
    render(Counter);
    const incrementButton = screen.getByTestId("increment-button");
    const output = screen.getByTestId("output");

    await fireEvent.click(incrementButton);
    expect(output.textContent).toBe("count is 1");

    await fireEvent.click(incrementButton);
    expect(output.textContent).toBe("count is 2");
  });

  it("decrements the count when the subtract button is clicked", async () => {
    const user = userEvent.setup();
    render(Counter);
    const decrementButton = screen.getByTestId("decrement-button");
    const output = screen.getByTestId("output");

    await user.click(decrementButton);
    expect(output.textContent).toBe("count is -1");

    await fireEvent.click(decrementButton);
    expect(output.textContent).toBe("count is -2");
  });

  it("correctly updates count with mixed operations", async () => {
    const user = userEvent.setup();
    render(Counter);
    const incrementButton = screen.getByTestId("increment-button");
    const decrementButton = screen.getByTestId("decrement-button");
    const output = screen.getByTestId("output");

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(decrementButton);
    expect(output.textContent).toBe("count is 1");
  });
});
