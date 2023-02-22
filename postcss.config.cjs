
const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		require('@tailwindcss/nesting'),
		require('tailwindcss'),
		//But others, like autoprefixer, need to run after,
		require('postcss-simple-vars'),
		require('autoprefixer')
	]
};

module.exports = config;
