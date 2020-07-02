# First experiment

<div align="center">

  <h1><code>JS frontend + Rust Webassembly</code></h1>

  <strong>A template for kick starting a Rust and WebAssembly project using 
  <a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a>.</strong>
</div>

## About

[**📚 Tutorial! 📚**][template-docs]

This template is designed for compiling Rust libraries into WebAssembly and
publishing the resulting package to NPM.

Be sure to check out [other `wasm-pack` tutorials online][tutorials] for other
templates and usages of `wasm-pack`.

[tutorials]: https://rustwasm.github.io/docs/wasm-pack/tutorials/index.html
[template-docs]: https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html

## 🚴 Usage

### Open terminal in rust-wasm folder

#### 🛠️ Build with `wasm-pack build` 

```
wasm-pack build
```

#### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

### Open terminal in frontend folder

#### 🛠️ Install front dependencies

```
npm install
```

### 🛠️ Run  

```
npm run start
```

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.
* `.gitignore`: ignores `node_modules`
* `README.md`: the file you are reading now!
* `index.html`: a bare bones html document that includes the webpack bundle
* `index.js`: example js file with a comment showing how to import and use a wasm pkg
* `package.json` and `package-lock.json`:
  * pulls in devDependencies for using webpack:
    * [`webpack`](https://www.npmjs.com/package/webpack)
    * [`webpack-cli`](https://www.npmjs.com/package/webpack-cli)
    * [`webpack-dev-server`](https://www.npmjs.com/package/webpack-dev-server)
  * defines a `start` script to run `webpack-dev-server`
* `webpack.config.js`: configuration file for bundling your js with webpack
