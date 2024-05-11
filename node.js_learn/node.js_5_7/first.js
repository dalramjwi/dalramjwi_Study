let http = require("http");
const fs = require("fs");

let mainDocument = `
<html>
  <body>
  <h1>Hello</h1>
  <h2>Hello</h2>
  </body>
</html>`;
fs.writeFile("./index.html", mainDocument, function () {});
function testServer(reqest, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.write(mainDocument);
  response.end();
}

let server = http.createServer(testServer);
server.listen(3000, function () {
  console.log("서버 돌아가");
  console.log("http://localhost:3000");
});
