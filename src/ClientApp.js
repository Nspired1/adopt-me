import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//things that should ONLY happen in BROWSER.
// NOTE: document doesn't exist in Node/Server, only in Browser

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
