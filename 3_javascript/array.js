'use strict';

// // 1] 배열 생성
// const fruits = ['사과', '바나나', '딸기', '파인애플'];   //이방식이 많이 쓰임
// // const fruits = new Array('사과', '바나나', '딸기');
// console.log('fruits: ', fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// fruits[2] = '포도';
// console.log(fruits[2]);

// // 2] 자주 사용하는 배열 API
// // length
// console.log('fruits.length: ', fruits.length);
// console.log('마지막 값: ', fruits[fruits.length - 1]);  배열의 마지막 값을 가져오는 방법

// // push()                                  // 배열의 끝에 값을 추가, 많이 사용함
// fruits.push('귤');
// console.log(fruits);

// // forEach()    
// fruits.forEach(function (item, index) {   //forEach()에 인자로 함수를 넘기는 것을 콜백함수라고 한다.
//   console.log(index, item);
// });

// // pop()   
// // fruits.pop();                           //배열의 끝에서부터 값을 제거
// // let removedItem = fruits.pop();
// // console.log('removedItem: ', removedItem);
// // console.log('제거완료: ', fruits);

// // shift()
// // fruits.shift();                          //배열의 앞에서부터 값을 제거
// // fruits.shift();
// // console.log(fruits);

// // unshift()                              //배열의 앞에서부터 값을 추가
// fruits.unshift('수박');
// console.log(fruits);

// // indexOf()                               //배열요소의 위치검색
// const index = fruits.indexOf('토마토');     //찾고자 하는게 없다면 -1을 반환
// console.log('index: ', index);

// // splice()
// const findIndex = fruits.indexOf('파인애플');  //파인애플 제거하기 위해
// console.log('findIndex: ', findIndex);
// fruits.splice(findIndex, 1);               //findIndex:찾은 위치에서, 1->1개를 제거하라
// console.log(fruits);

// 3] 구조 분해 할당
// let fruits = ['사과', '바나나', '딸기'];
// // let apple = fruits[0];
// // let banana = fruits[1];
// // let strawberry = fruits[2];     //이런식으로 할당을 하면 비효율적  이것을 간단히 위헤...구조분해할당

// let [apple, banana, strawberry] = ['사과', '바나나', '딸기'];  //이렇게...

// console.log(apple);
// console.log(banana);
// console.log(strawberry);
// console.log(others);

// 4] 전개 구문    //  ...을 이용      ...fruit1-> fruit1의 내용을 펼쳐라 라는 뜻
// let fruits1 = ['사과', '바나나', '딸기'];
// let fruits2 = ['파인애플', '수박'];
// let items = [...fruits1, ...fruits2];   //배열을 한번에 다른 배열식으로 할당하는 방법   ...세개 점을 찍으면 배열을 펼친다라는 의미 
// console.log(items);

// 5] Rest parameter
// print('a', 'b', 'c', 'b', 'e', 'f');

// function print(...values) {             
     //print()의 매개변수에서 ...을 찍으면 인자가 몇개인지 알수 없을 때 맘데로 이용할수 있다.  ...변수는 배열이라는 의미
//   // values.forEach(function (value, index) {
//   //   console.log('index: ', index, 'value: ', value);
//   // });
// }


//배열의 복사

// 얕은 복사(Shallow copy)   //주소값을 넘기는 방식 
// let source = ['사과', '바나나', '딸기'];
// let target = source;   //주소값을 넘김
// target[0] = '파인애플';   //주소값을 넘겼기 때문에 source[0]도 동일하게 파인애플로 변경이 되어 버린다. 
// console.log('source: ', source);
// console.log('target: ', target);

// 깊은 복사(deep copy)  :새로운 주소로 할당, 위의 것을 극복하기 위해 이것을 실행한다. 3가지 방법이 있음..(1), (2), (3)
let source = ['사과', '바나나', '딸기'];
// let target = [...source];         //(1)  1.이것을 진행하고
// let target = Array.from(source);  //(2)
let target = source.slice();   //(3)
target[0] = '파인애플';                      //2.이렇게 하면 source[0]값은 변경이 안된다.
console.log('source: ', source);
console.log('target: ', target);
