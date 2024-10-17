'use strict';   //자바스크립트 문법을 정확하게 체크하고자 쓰는 선언

// 1] 숫자타입
let number = 2;
const number2 = 1.2;
console.log(number2);
console.log(5 / 0);   //결과가 infinity ->이것도 숫자타입에 속한다.
console.log(-5 / 0); //-infinity
let nan = 'hello' / 5;  //NaN (not a number)->이것도 숫자타입
console.log(nan);
console.log(typeof nan);  //데이타 타입을 확인한다.

// 2] 문자타입
const name1 = '홍길동';
const name2 = "홍길동";
const name3 = `홍길동`;  //백틱표현 이것도 가능
const name = '홍길동';
const age = 25;

console.log(
  '안녕하세요 제 이름은 ' + name + ' 입니다. 나이는 ' + age + '살 이에요.'
);
console.log('------------');

console.log(`안녕하세요 제 이름은 ${name}입니다. 나이는 ${age}살 이에요.`);

const message = `안녕하세요 이렇게 표현할 수 있어요`;
console.log(message);

const hello = "안녕하세요\n제 이름은 \'홍길동\' 입니다.";  //개행과 '표 표시
console.log(hello);

// 3] 불리언
const isProgramer = true;
const isDesign = false;
console.log('isProgramer: ', typeof isProgramer);
console.log('isDesign: ', isDesign);
if (isProgramer) {
  console.log('프로그래머 입니다.');
} else {
  console.log('디자이너 입니다.');
}

// 4] null, undefined   //의미론적으론 둘다 값이 비어있는 상태  null: 값이 없는 상태, undefined:값을 할당하지 않은 상태
const username = null;  //값을 아직 할당하고 싶지 않을 때 이런식으로 사용..선언만..
let message2;   //undefined 상태
console.log('username: ', username);
console.log('message2: ', message2);
console.log(typeof username);  //오브젝트 타입으로 나오는데...자바스크립트 버그라고 한다.

const person = {   //오브젝트 타입객체는 값을 여러가지 갖을수 있다.
  name: '홍길동',
  age: 25,
  isProgramer: true,
  say() {
    console.log('Hello~!');
  },
};

const arr = [1, 2, 3, 4, 5];  //배열

console.log(arr.length);
arr.push(88);  //배열에 값을 추가.
console.log(arr);