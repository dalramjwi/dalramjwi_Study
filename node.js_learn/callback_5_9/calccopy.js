//if문을 사용해서 계산해보기
//a가 5 이상이면 +, 5 이하면 *
const first = function calcBooha(a, b, callback) {
  callback(a, b);
  if (a >= 5) {
    console.log(a + b);
  }
  if (a < 5) {
    console.log(a * b);
  } else if (typeof a === "string" && typeof b === "string") {
  }
};
first(10, 20, () => {});
first(4, 20, () => {});
