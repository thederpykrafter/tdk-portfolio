const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					dark: 'black',
					light: '#555555',
					border: '#a855f7'
				},
				secondary: {
					border: 'rgb(71 85 105)'
				},
				brand: {
					svelte: '#ff3e00',
					tailwind: '#38bdf8',
					github: '#2dba4e'
				}
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
