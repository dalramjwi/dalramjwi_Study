const http = require("http");

const url = require("url");

const qs = require("querystring");

const fs = require("fs");
// 서버 생성

const server = http.createServer((req, res) => {
  // POST 요청일 때 데이터를 받아서 처리
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
      // 받은 데이터를 문자열로 변환하여 body에 추가
    });
    req.on("end", () => {
      const postData = qs.parse(body);
      // POST 데이터 파싱
      console.log("Received text from client:", postData.text);
      res.end("Received text successfully!");
    });
  } else {
    // GET 요청일 때 index.html 파일을 클라이언트에게 보냄
    const pathName = url.parse(req.url).pathname;
    if (pathName === "/") {
      fs.readFile("./simple.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }
  }
});
// 서버 시작
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
