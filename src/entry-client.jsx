import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "@/App";
import "@/index.css";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Na versão publicada o HTML já vem pronto (pré-renderizado); em "npm run dev" não.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
