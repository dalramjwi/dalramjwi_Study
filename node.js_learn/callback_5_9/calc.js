function calcBooha(a, b, callback) {
  callback(a, b);
}
//로직을 호출할때 결정한다.
//여러가지 방법으로 변형해봐라
//if문, 화살표 함수, addEventListener, writefile 등등
//기명과 익명의 구분을 잘 해봐라
//js는 유독 종류가 많다.(함수 만들기)
calcBooha(10, 20, function (a, b) {
  let result = console.log(a + b);
  return result;
});
calcBooha();
calcBooha(10, 20, function (a, b) {
  let result = console.log(a - b);
  return result;
});
