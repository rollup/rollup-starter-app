import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	entry: 'src/main.js',
	dest: 'public/bundle.js',
	format: 'iife', // immediately-invoked function expression — suitable for <script> tags
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
		commonjs(), // converts date-fns to ES modules
		production && uglify() // minify, but only in production
	],
	sourceMap: true
};