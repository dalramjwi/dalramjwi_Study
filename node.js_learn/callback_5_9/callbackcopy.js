function a(a, b) {
  return a + b;
}
//이 함수를 사용해 곱셈해달라
function b(a, b, callback) {
  callback(a, b);
}
b(1, 2, function (a, b) {
  console.log(a * b);
});

function add(a, b) {
  return a + b;
}
b(1, 2, function (a, b) {
  console.log(a + b);
});
//이름이 없는 익명함수라 한다. (vs 이름이 있는 기명함수)
//결과적으로 익명함수를 식별해서 쓰게 될 것이다.

console.log(
  b(1, 2, function (a, b) {
    console.log(a + b);
  })
);

//a와 b가 문자열이라면 덧셈처리
//a와 b가 숫자라면 곱셈처리
//typeof 메서드로 확인한 후 처리해보자
function b(a, b, callback) {
  callback(a, b);
  if (typeof a === "string" && typeof b === "string") {
    console.log(a + b);
  }
  if (typeof a === "number" && typeof b === "number") {
    console.log(a * b);
  }
}
b("안녕", "하세요", function (a, b) {});
b(5, 5, function (a, b) {});
