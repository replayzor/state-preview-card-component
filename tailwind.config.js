/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					veryDarkBlue: "hsl(233, 47%, 7%)",
					darkDesaturatedBlue: "hsl(244, 38%, 16%)",
					softViolet: "hsl(277, 64%, 61%)",
				},
				neutral: {
					slightlyTransparentWhite: "hsla(0, 0%, 100%, 0.75)",
					slightlyTransparentWhiteStatHeadings: "hsla(0, 0%, 100%, 0.6)",
				},
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				lexendDeca: ["Lexend Deca", "sans-serif"],
			},
		},
	},
	plugins: [],
};
