# First Rust experiment

<div align="center">

  <h1><code>Rust Hello World + Dockerization</code></h1>
  
  <strong>Rust instalation
  <a href="https://www.rust-lang.org/tools/install">rustlang</a>.</strong>

  <strong>Docker instalation
  <a href="https://docs.docker.com/docker-for-windows/install/">docker</a>.</strong>
</div>

## 🚴 Usage

### 🛠️ Build

```
cargo build
```

### 🛠️ Run  

```
cargo run
```

## 🚴 Docker Usage

### 🛠️ Build

```
docker build --tag rust-hello:latest .
```

### 🛠️ Run  

```
docker run --name rust-hello rust-hello:latest
```

### Remove container

```
docker rm --force rust-hello
```
