/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				warning: "#ffa41d",
				error: "#fc4c4c",
				success: "#26b26c",
			},
		},
	},
	plugins: [],
};
