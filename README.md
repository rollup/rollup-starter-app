# rollup-starter-app

[![Greenkeeper badge](https://badges.greenkeeper.io/rollup/rollup-starter-app.svg)](https://greenkeeper.io/)

This repo contains a bare-bones example of how to create an application using Rollup, including importing a module from `node_modules` and converting it from CommonJS.

*See also https://github.com/rollup/rollup-starter-lib*


## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/rollup/rollup-starter-app
cd rollup-starter-app
npm install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js` and including all its dependencies, including [date-fns](https://date-fns.org).

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:5000](http://localhost:5000).

`npm run dev` (run it in a separate terminal to `npm start`) will continually rebuild the application as your source files change, using [rollup-watch](https://github.com/rollup/rollup-watch).


## License

[MIT](LICENSE).
