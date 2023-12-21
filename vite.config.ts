import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				dimensions: false,
			},
		}),
	],
	resolve: {
		alias: [
			{ find: "~/icons", replacement: "/src/assets/icons/" },
			{ find: "~/", replacement: "/src/" },
		],
	},
});
