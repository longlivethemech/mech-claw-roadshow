import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On `vite build` (CI → GitHub Pages project site) assets must be served from
// the repo subpath; local `vite dev` stays at "/" so the existing preview /
// launch.json workflow is untouched. Chapters reference images via
// `import.meta.env.BASE_URL`, so they follow this base automatically.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/mech-claw-roadshow/" : "/",
  plugins: [react()],
  server: {
    port: 5174,
    fs: { allow: [".."] },
  },
}));
