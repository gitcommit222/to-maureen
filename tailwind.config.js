/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			rotate: {
				"-10": "-10deg",
				"14": "14deg",
				"1": "1deg",
				"10": "10deg",
				"15": "15deg",
				"20": "20deg",
			},
		},
	},
	plugins: [],
};
