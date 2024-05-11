const studentNamesArray = require("./names-data.js");
//js 방식 - 선언형
studentNamesArray.forEach((name) => {
  console.log(name);
});
//for each를 함수로 만들어보자
//배열 받아야하고
//callback 받아야한다.
// function na(array,callback){
//   callback(array)
// }
function na(array) {
  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    console.log(name);
  }
}
