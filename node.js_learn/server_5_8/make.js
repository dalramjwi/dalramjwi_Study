//made.html 파일 만든다
const http = require("node:http");
const fs = require("node:fs");
const content = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
  <h1>한글</h1>
</body>
</html>
`;
// console.log(content);
fs.writeFile("made.html", content, function () {});
//먼저 made.html 파일을 읽는다.

//made.html 파일 내용을 화면에 띄운다
const server = http.createServer();
server.on("request", (req, res) => {
  fs.readFile("made.html", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
});
server.listen(8000);
