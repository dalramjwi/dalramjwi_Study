let http = require("http");

let mainDocument = `
  <html>
    <body>
      <h1>hello</h1>
      <script>
      alert("Hello");
      
      </script>
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
  console.log("야 서버 잘돌아가!");
  console.log("http://localhost:3000");
});
