const http = require("node:http");
// console.log(http);
console.table(http);
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    `<html>
      <head>
      <meta charset="UTF-8">
      <style>
      div {width: 100px; height: 100px; background-color:red;}
      </style>
      </head>
      <body>
        <h1>안녕</h1>
        <div>나는 넓이를 가질거야</div>
      </body>
    </html>
    `
  );
});

// ? 요청과 응답을 어떻게 처리 할 것인지?
//* 무슨 기능을 넣을 것인지?
//* 문서를 보낼까?
server.listen(8000);
