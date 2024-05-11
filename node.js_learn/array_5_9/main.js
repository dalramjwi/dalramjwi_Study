const fs = require("fs");
const data = require("./base.js");
// fs.writeFile("write.html", data, (err) => {});
const http = require("http");
const todolist = [];

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const postData = JSON.parse(body);
      console.log("Received text from client:", postData.title);
      todolist.push(postData.title);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(data);
    });
  }

  if (req.method == "GET") {
    if (req.url == "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(data);
    }
  }
});
server.listen(8000, () => {
  console.log(`http://localhost:8000`);
});
