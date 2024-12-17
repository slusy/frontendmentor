import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://spudoodle.github.io/frontendmentor/junior/age-calculator-app",
  build: {
    outDir: "../../../junior/age-calculator-app",
  },
});
