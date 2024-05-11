const a = function () {
  console.log(first);
};
a();
//단축방식
// const b = () => console.log(first);
// b();
//매개변수가 하나면 지워도 괜찮다.
const b = (first) => console.log(first);
b();
