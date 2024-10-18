import "./app.css";
import App from "./App.svelte";
import { mount } from "svelte";

const appElement = document.getElementById("app");
if (appElement === null) {
  throw Error("Expecting app element to exist");
}
const app = mount(App, { target: appElement });

export default app;
