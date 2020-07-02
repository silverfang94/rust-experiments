# Third experiment


#### Setup
install and setup rust toolchain first
```bash
rustup default nightly
rustup target add wasm32-unknown-unknown
cargo install wasm-gc
```
then
```bash
yarn install
```

#### Run
```bash
yarn serve --open
```

#### Build
```bash
yarn build
```