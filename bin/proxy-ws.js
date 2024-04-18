#!/usr/bin/env node

const httpProxy = require("http-proxy");

let target = "127.0.0.1:8080";
let port = 9001;
let headers = {};
for (let j = 0; j < process.argv.length; j++) {
    if (process.argv[j] == "-t") {
        target = process.argv[j + 1];
    } else if (process.argv[j] == "-p") {
        port = parseInt(process.argv[j + 1]);
    } else if (process.argv[j] == "-h") {
        headers = JSON.parse(process.argv[j + 1]);
    }
}

console.log(`127.0.0.1:${port} -> ${target}`);

httpProxy
    .createServer({
        target,
        headers,
        ws: true,
    })
    .listen(port);
