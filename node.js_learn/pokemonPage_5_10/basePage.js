const http = require("http");
const fs = require("fs");
const base = require("./basetemplate.js");

const server = http.createServer((req, res) => {
  let url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(base);
  }

  if (url === "/one.html") {
    FileRead("./one.html", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (url === "/two.html") {
    FileRead("./two.html", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (url === "/three.html") {
    FileRead("./three.html", (data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (url === "/data.js") {
    FileRead("./data.js", (data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

function FileRead(path, callback) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  });
}
