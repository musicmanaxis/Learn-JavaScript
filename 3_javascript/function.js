'use strict';
//함수를 선언하는 방법은 1,2 두가지 방법이 있는데 1번방법은 호이스팅이 일어나서 맨아래 선언이 있어도 함수호출을 상단에 하여도
//함수가 실행이 된다..

// 1.함수 선언식 [O]
// function sayHello() {
//   console.log('이름과 나이를 출력해주세요');
//   console.log('이름: 홍길동, 나이: 25살');
// }
// 2.함수 표현식:함수를 변수에 할당하는 방법
const sayHello = (name, age) => {
  console.log('이름과 나이를 출력해주세요');
  console.log(`이름: ${name}, 나이: ${age}살`);
};
sayHello('짐코딩', 20);
sayHello('김길동', 45);


//arrow function  ->function이라는 예약어 생략
const sum = (num1 = 0, num2 = 0) => num1 + num2;  //함수인자 2개를 0으로 초기화 하여 인자둘중 하나가 빠져도 연산이 되게 함..
let result = sum(5, 3);
console.log('result: ', result);
// let result2 = sum(5);   //인자가 2개가 들어가야 하는데..하나만 넣을경우
// console.log('result2: ', result2);   //NaN(not a number)가 출력
// console.log('-------------------------');


// function aFunc() {    //코드블럭에 대한 것
//   let name = '짐코딩';
//   let age = 20;
//   function bFunc() {
//     let job = '개발자';
//     console.log('bFunc name: ', name);
//     console.log('bFunc age: ', age);
//     console.log('bFunc job: ', job);
//   }
//   bFunc();
//   console.log('aFunc name: ', name);
//   console.log('aFunc age: ', age);
//   // console.log('job: ', job);
// }
// aFunc();
// console.log('========');


// (function () {          //익명함수
//   console.log('hello');
// })();   //함수를 즉시 실행

const f1 = name => `Hello ${name}`;   //arrow function  인자가 하나일경우 ()생략가능, 실행문이 한줄이면 {}생략가능, return생략가능
const str = f1('짐코딩');
console.log(str)

let fruits = ['사과', '바나나', '딸기'];
fruits.forEach((item, index) => {   //인자가 2개라서 ()추가 -> (item, index), 실행문이 2줄이상이면 {}추가
  console.log('item: ', item)
})