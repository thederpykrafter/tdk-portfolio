const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
