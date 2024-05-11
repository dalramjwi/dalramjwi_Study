const lunchMenus = [
  ["주니어와퍼", "몬스터와퍼", "스테커버거", "콰트로치즈", "와퍼"],
  ["쉑쉑버거", "핫도그", "밀크쉐이크", "스모크쉑버거"],
  "순두부찌개",
  ["치킨마요", "참치마요", "무슨마요", "도련님도시락"],
  ["짜장면", "짬뽕", "볶음밥", "잡채밥", "유린기"],
  "쭈꾸미",
  "함박스테이크",
  "마라탕",
  "곰탕",
  "돈까스",
  "쌀국수",
  "분식",
  "칼국수",
  "콩나물밥",
];

function lunchSelector(array) {
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  // 랜덤 정수 : 범위는 배열의 길이값 내에서(최소 포함, 최대 미포함)
  const firstGetRandomIndex = getRandomInt(0, array.length);

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[firstGetRandomIndex]) === true) {
      // 반복문의 원소가 배열이라면 참(true) 부분에 대한 조건식
      const randomIndex = getRandomInt(0, array[i].length);
      // 한번더 랜덤을 돌리는데, 이번에는 원소가 배열이므로, 해당 배열 범위 내에서 랜덤값 추출

      for (let j = 0; j < array[i].length; j++) {
        // let i는 부모 반복문에 사용해서, 관습적으로 j를 사용함
        // 리턴시키기 위해 반복문으로 배열속배열까지 인덱스에 접근
        // 리턴 되면 해당 함수는 종료됨
        return array[firstGetRandomIndex][randomIndex];
      }
      // return array[randomIndex]; 확인해보니 해당 리턴은 아무의미 없어서 삭제
    }
  }
  return array[firstGetRandomIndex];
}

// console.log(lunchSelector(lunchMenus));

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>");
  res.write("점심 메뉴 고르기");
  res.write("</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>");
  const getData = lunchSelector(lunchMenus);
  console.log(getData);
  res.write(getData);
  res.write("</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, (error) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("서버돌아감");
    console.log(`http://localhost:3000/`);
  }
});
