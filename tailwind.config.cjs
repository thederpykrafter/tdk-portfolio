const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					1: 'black',
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
