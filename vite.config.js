import { sveltekit } from '@sveltejs/kit/vite';
import svg from 'vite-plugin-svgstring';
import dsv from '@rollup/plugin-dsv';


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(),
	// necessario dsv() per la gestione del parsing automatico CSV-JSON
		dsv()
		/*, svg()*/]
};

export default config;
