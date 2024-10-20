// 문자열 병합
// console.log('Hello ' + 'world!');
// console.log('3' + 3); // number -> string
// console.log(typeof ('3' + 3)); // number -> string
// console.log('3' + 5 + 8);
// console.log(3 + 5 + '8'); // "88"

// let x = 10;
// let y = 20;
// console.log(x + y);
// console.log(x - y);
// console.log(x / y);
// console.log(x * y);
// console.log(9 % 2);

// let number = prompt('숫자를 입력해주세요!');
// if (number % 2 === 1) {
//   alert('홀수 입니다!');
// } else {
//   alert('짝수 입니다!');
// }
// 10 + 20
// let result = x + y--;
// console.log('x: ', x);
// console.log('y: ', y);
// console.log('result: ', result);...

// let a = 30;
// let b = '30';
// console.log(a !== b); //true       === 3개를 쓰면 데이터 타입까지 검사함으로 이것을 권장한다.  !==도 마찬가지.......
// console.log(a != b); // false
// ===, !==

// let x = 10;
// let y = 20;
// // x = x + y;
// x += y;
// console.log(x);
// // 1부터 10까지 더하는
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   // sum = sum + i;
//   sum += i;
//   console.log(`${i} 번째 sum=${sum}`);
// }

// let x = true;
// let y = false;
// console.log(x && y); // 모두 true 일때 true, 그 외 false
// console.log(x || y); // 둘 중 하나라도 true 이면 true, 나머지 false
// console.log(!x);

let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');

btn.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  // console.log('email: ', email === '');
  password = null;
  if (password && password.length === 8) {   //연산판별이 빨리 되는 것은 앞에 위치  ->password
    console.log('성공');
  } else {
    console.log('실패');
  }
  // '' => false => true
  // if (email === '' || validateEmail(email)) {   
     //  ||연산은 앞에 것이 빨리 판별되는 것을 적어두는 것이 좋다..||연산은 둘중 하나만 true이면 바로 통과되기 때문에...
  //   console.log('이메일이 유효하지 않습니다.');
  // } else if (!password) {
  //   console.log('비밀번호를 입력해주세요.');
  // } else if ((password.length >= 8 && password.length <= 16) === false) {
  //   console.log('비밀번호는 8~16자 이내 입니다.');
  // } else {
  //   console.log('로그인 성공!');
  // }

  // (password.length >= 8 && password.length <= 16) => false
});

function validateEmail(email) {
  // .....
  // 5분이 걸리는 로직이라고 가정했을 경우...
  return true;
}

let number = 7;
let message = number % 2 === 1 ? '홀수 입니다.' : '짝수 입니다.';   //3항 연산자

// if (number % 2 === 1) {
//   message = '홀수 입니다.';
// } else {
//   message = '짝수 입니다.';
// }
console.log(message);