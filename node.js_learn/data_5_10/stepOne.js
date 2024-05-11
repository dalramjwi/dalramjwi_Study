const fs = require("fs");
const http = require("http");
function loadPokemonNames(path) {
  try {
    if (typeof path === "string") {
      const pokemonValue = fs.readFileSync(path, "utf8");
      return JSON.parse(pokemonValue);
    }
    // else 를 사용하는 대신 try catch 문법을 사용해서 에러를 잡아내는 것이
    // '에러 처리'라는 것을 명시적으로 이야기 하는 좋은 어휘
  } catch (error) {
    // 매개변수 error는 catch구문이 실행될 때 자동으로 전달되는 변수
    console.error("에러 내용:", error);
  }
}

const data = loadPokemonNames("./pokemonNames.json");
console.log(data.length);

//서버 만든다
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(`${data}`);
});
server.listen(3000);
