//1.배열을 하나의 문자열로 만드시오
const fruits1=['apple', 'banana', 'orange'];
const result1=fruits1.join('-');
console.log(result1);

//2.문자열을 배열로 만드시오
const fruits2='사과, 애플, 망고, 바나나';
const arr=fruits2.split(',');
console.log(typeof(arr))
console.log(arr)

//3.배열을 거꾸로 만드시오
const array1=[1,2,3,4,5]
const result2=array1.reverse()
console.log(result2)
console.log(array1)  //원래 배열자체도 거꾸로 바뀜

//4. 1,2번째 요소를 삭제하고 새로운 배열을 만드시오
const array2=[1,2,3,4,5]
const array3=array2.slice(2,5)
console.log(array3)


