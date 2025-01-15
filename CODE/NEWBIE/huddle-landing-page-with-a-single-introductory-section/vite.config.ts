import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "https://spudoodle.github.io/frontendmentor/out/huddle-landing-page-with-a-single-introductory-section",
	build: {
		outDir:
			"../../../out/huddle-landing-page-with-a-single-introductory-section",
	},
});
