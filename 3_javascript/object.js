'use strict';

// 객체 리터럴 문법
// const person = {
//   name: '짐코딩',
//   age: 25
// };
// person.job = '개발자';  //정의할 때는 이 필드가 없었으나 후에 이렇게 만들수도 있음...비추천


// 객체 생성자 문법
// const person = new Object();
// person.name = '짐코딩';
// person.age = 40;

// const person = {
//   name: ['Bob', 'Smith'],
//   age: 32,
//   gender: 'male',
//   interests: ['music', 'health'],

//   hello: function() {
//     alert('Hello!');
//   },

//   greeting: function() {
//     alert('Hi!');
//   },

// 	hobby: {                  //객체안에 객체를 생성
// 		name: 'programing',
// 		alert: function() {
// 			alert('programing');
// 		}
// 	},
// };

// console.log(person.name[0])
// console.log(person.name[1])
// person.hello()

// console.log(person.hobby.name)
// console.log(person.hobby.alert())

// person['name'][0] = '값변경'     //['']으로 필드 호출
// console.log(person['name'][0])
// console.log(person['name'][1])
// // person['hello']()   //메서드 호출

// console.log(person['hobby']['name'])
// // person['hobby']['alert']()
// delete person.name    //필드제거
// delete person['age']
// console.log(person);

// function printPerson({ hobby, name, age }) {    //함수에 인자가 많을 경우....복잡하므로 객체를 만들어서 
//   console.log(`제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`);
// }


// function createPerson(name, age, hobby) {  //펙토리 함수->객체를 만드는 함수
//   return {
//     name,   //name:name, 으로 표기해야 하나 키와 값이 같은 경우는 값만 표기해도 된다.
//     age,
//     hobby
//   }
// }

//ES5
// function Person(name, age, hobby) {
//   this.name = name;
//   this.age = age;
//   this.hobby = hobby;
// }

// ES6
// class Person {
//   constructor(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
//   }
// }
// const person1 = new Person('김깅동1', 1, '아무거나')    //ES5, ES6클래스에서 정의한것은 이런식으로 객체를 생성
// const person1 = createPerson('김길동1', 1, '아무거나')
// const person2 = createPerson('김길동2', 1, '아무거나')
// const person3 = createPerson('김길동3', 1, '아무거나')
// const person4 = createPerson('김길동5', 1, '아무거나')
// const person5 = createPerson('김길동6', 1, '아무거나')
// const person6 = createPerson('김길동7', 1, '아무거나')
// const person7 = createPerson('김길동8', 1, '아무거나')
// printPerson(person1);
// printPerson(person2);
// printPerson(person3);
// printPerson(person4);

// const { hobby, name, age } = person;   //person객체에서 각 필드를 꺼내 왼쪽 필드에 할당할수 있다.
// console.log('name: ', name)
// console.log('age: ', age)
// console.log('hobby: ', hobby)

// const fruits = ['사과', '포도', '딸기'];   //배열의 구조할당과 같은 개념이다.
// const [a, b] = fruits
// console.log(a)
// console.log(b)

// let username = '짐코딩';
// console.log(username);
// changeName(username);
// console.log(username);

// function changeName(name) {
//   name = '홍길동';
//   console.log(name);
// }
// console.log('=====');

//객체생성
// const person1 = {
//   name: '짐코딩', 
//   age: 25,
// };


// console.log('name2' in person1);

// if ('name2' in person1) {
//   console.log('존재 합니다.');
// } else {
//   console.log('존재하지 않습니다.');
// }


//객체 복사하는 방법->2가지
// // let person2 = { ...person1 };    
//1.전개 구문은 참조값을 할당하는 방식이 아닌 객체에서 속성을 펼치는(Spread) 방식이기 때문에 결론적으로 객체 복사가 가능합니다

// let person2 = Object.assign({}, person1);   //{}->1번째 자리는 비워둔다는 의미
//2.Object.assign() 자바스크립트 내장 객체인 `Object`의 `assign()`메서드를 사용하여 복사할 수 있습니다.

//객체복사 후 출력
// person2.name = '홍길동';
// console.log(person1);
// console.log(person2);



// 객체의 키값 반복적 반환:for ... in 
const person3 = {
	name: '홍길동',
	age: 20,
	job: '개발자'
}; 
for (let key in person3) {
	console.log(`key: ${key}, value: ${person3[key]}`);
}
// [출력]
// key: name, value: 홍길동
// key: age, value: 20
// key: job, value: 개발자





// console.log(person);
// changePersonName(person);
// console.log(person);
// function changePersonName(people) {
//   people.name = '홍길동';
//   people.age = 60;
// }



//키 존재 여부 확인하는 방법
const person4 = {
  name: '짐코딩',
};
if ('name' in person4) {   //'name' in person4 ->이런식으로 키를 조회할 수 있다
  console.log('person4의 이름이 정의되어 있습니다.');
}
console.log(person4.hasOwnProperty('name')); // true
console.log(Object.hasOwn(person4, 'name')); // true

console.log(person4.name);
if (person4.name) {   //person4.name ->이런식으로 가능
  console.log('true~~~');
}