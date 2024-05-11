const http = require("http");
let mainDocument = `
<html>
  <body>
    <h1>Hello</h1>
  </body>
</html>`;
function testServer(request, response) {
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
