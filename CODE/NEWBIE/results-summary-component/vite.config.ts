import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://spudoodle.github.io/frontendmentor/newbie/results-summary-component",
  build: {
    outDir: "../../../newbie/results-summary-component",
  },
});
