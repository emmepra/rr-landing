const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'main-lighter': '#c7e4d0',
				'main-light': '#a1cfa9',
				main: '#78a77E',
				'main-dark': '#5c7f5f',
				'main-darker': '#3f5740',
				primary: '#f7f2ea',
				secundary: '#282828',
				'womred': '#b2182b',
				'manblue': '#2166ac',
			},
			fontFamily: {
				sans: ['Public Sans', 'sans-serif'],
				serif: ['Lora'],
				mono: ['JetBrains Mono']
			}
		}
	},

	plugins: [
		require('tailwindcss-textshadow'),
	]
};

module.exports = config;
