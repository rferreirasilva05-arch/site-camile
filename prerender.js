// Gera o HTML final da página (bom para o Google e para abrir mais rápido).
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { render } from "./dist-server/entry-server.js";

const file = "dist/index.html";
const { html, head } = render();
const out = readFileSync(file, "utf8")
  .replace("<!--app-head-->", head)
  .replace("<!--app-html-->", html);
writeFileSync(file, out);
rmSync("dist-server", { recursive: true, force: true });
console.log("Página pré-renderizada em dist/index.html");
