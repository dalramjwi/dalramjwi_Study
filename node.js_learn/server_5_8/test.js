//a와 b가 문자열이라면 덧셈처리
//a와 b가 숫자라면 곱셈처리
//typeof 메서드로 확인한 후 처리해보자
function b(a, b, callback) {
  if (typeof a === "string" && typeof b === "string") {
    callback(a, b);
  }
  if (typeof a === "number" && typeof b === "number") {
    callback(a, b);
  }
  //callback을 위에 두던 아래에 두던 결과값은 똑같다.
}
b("안녕", "하세요", function (a, b) {
  console.log(a + b);
});

b(5, 5, function (a, b) {
  console.log(a * b);
});
