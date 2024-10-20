'use strict';

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let fruits = ['사과', '배', '바나나', '포도', '딸기'];

// for (let i = 0; i < fruits.length; i++) {
// console.log(fruits[i]);
// }

let person = {
  name: '홍길동',
  age: 25,
  job: '개발자',
};
// let key = prompt('어떤 값을 출력 할까요? 키를 입력해주세요');
// console.log(person[key]);   //[]를 이용해 객체의 속성에 접근하게 되는데 키값을 입력하게 되면 해당하는 값이 반환된다.

let keys = Object.keys(person);   //Object.keys() 메서드는 오브젝트의 key를 배열로 반환한다.
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
  let key = keys[i];
  console.log(person[key]);   //키에 해당하는 값을 가져온다
}
console.log('------');
for (let key in person) {     //in을 이용하면 객체(object)에 있는 키 항목들을 반복적으로 반환, ES6에서 추가됨
  console.log(person[key]);
}
console.log('-----');
let fruits = ['사과', '배', '바나나', '포도', '딸기'];
for (let fruit of fruits) {    //  반복 가능한 배열과 같은 객체에서 반복해서 값을 하나씩 반환
  console.log(fruit);
}