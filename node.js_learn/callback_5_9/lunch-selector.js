const lunchMenu = [
  ["주니어와퍼", "와퍼", "몬스터와퍼"],
  "순두부찌개",
  ["짜장면", "탕수육", "짬뽕"],
  ["치킨마요", "참치마요", "도련님도시락"],
  "쭈꾸미",
  "함박스테이크",
  "마라탕",
  "곰탕",
  "쌀국수",
  "분식",
  "돈까스",
  "칼국수",
  "콩나물밥",
];
//slack으로 받은 코드 - 메서드라 가정하자
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
// getRandomInt(0, array.length);
function lunchSelector(array) {
  const randomIndex = getRandomInt(0, array.length);
  const randomIndex2 = getRandomInt(0, array[randomIndex].length);
  //랜덤을 결정하면 그것이 하나의 인덱스가 되어 배열 속 원소 값을 선택해주는 실행문 필요
  if (Array.isArray(array[randomIndex]) === true) {
    console.log(array[randomIndex][randomIndex2]);
    return array[randomIndex][randomIndex2];
  } else {
    console.log(array[randomIndex]);
    return array[randomIndex];
  }

  // if Array.isArray(array[randomIndex]) {}
}
// lunchSelector(lunchMenu);
// console.log(Array.isArray(lunchMenu)); // true

const http = require("http");
const server = http.createServer();
// console.log(getData);
server.on("request", (req, res) => {
  if (req.url === "/favicon.ico") return;

  const getData = lunchSelector(lunchMenu);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // res.write(
  //   `<html>
  //     <body>
  //     <h1>${getData}</h1>
  //     </body>
  //   </html>`
  // );
  res.end(
    `<html>
      <body>
      <h1>${getData}</h1>
      </body>
    </html>`
  );
});
server.listen(8000);
