const http = require("node:http");
const server = http.createServer();
const fs = require("fs").promises;
fs.readFile("./made.text", (err, data) => {
  if (err) {
    throw err;
  }
});
console.log(data);
server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // res.write(made.html);
  res.end("content");
});
server.listen(8000);
