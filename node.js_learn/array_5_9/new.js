const fs = require("fs");
const data = require("./simplebase.js");
// fs.writeFile("write.html", data, (err) => {});
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  req.body(data);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(data);
});
server.listen(8000);
