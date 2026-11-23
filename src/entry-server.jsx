import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "@/App";
import { renderHead } from "@/head";

export function render() {
  return {
    html: renderToString(
      <StrictMode>
        <App />
      </StrictMode>
    ),
    head: renderHead(),
  };
}
