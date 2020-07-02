FROM rust:alpine3.12

WORKDIR /usr/src/hello_world

COPY . .

RUN cargo build --release

RUN cargo install --path .

CMD ["/usr/local/cargo/bin/hello_world"]