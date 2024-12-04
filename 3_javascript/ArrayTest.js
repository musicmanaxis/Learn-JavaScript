//////////////////////////////////////////////////
console.log('1.배열을 하나의 문자열로 만드시오')
const fruits1=['apple', 'banana', 'orange'];
const result1=fruits1.join('-');
console.log(result1);

//////////////////////////////////////////////////
console.log('2.문자열을 배열로 만드시오')
const fruits2='사과, 애플, 망고, 바나나';
const arr=fruits2.split(',');
console.log(typeof(arr))
console.log(arr)

//////////////////////////////////////////////////
console.log('3.배열을 거꾸로 만드시오')
const array1=[1,2,3,4,5]
const result2=array1.reverse()
console.log(result2)
console.log(array1)  //원래 배열자체도 거꾸로 바뀜

//////////////////////////////////////////////////
console.log('4.1,2번째 요소를 삭제하고 새로운 배열을 만드시오')

const array2=[1,2,3,4,5]
const array3=array2.slice(2,5)
console.log(array3)

///////////////////////////////////////////////////
console.log('5. 90점 이상 학생을 구하시요.')
 class Student{
    constructor(name, age, enrolled, score){
        this.name=name
        this.age=age
        this.enrolled=enrolled
        this.score=score
    }
 }

 const students=[
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 85),
    new Student('C', 49, true, 75),
    new Student('D', 39, false, 95),
    new Student('E', 25, true, 98),
 ]

 console.log('정답:배열의 함수중 find를 이용==========')

 const result=students.find((student)=>{return student.score>90})
 //하나만 리턴하게 됨...내가 작성한처럼 2가지 이상은 안됨
 console.log(result)


 console.log('내가 작성한 것==========')
 for(let i=0;i<students.length;i++ ){
    if(students[i].score>90){
         console.log(students[i])
    }
}
 //////////////////////////////////////////////////
 console.log('6. 등록한 학생만 배열로 만드시오')
 console.log('정답:배열의 함수중 filter를 이용하면 새로운 배열로 받는다==========')
 console.log(students.filter((s)=>s.enrolled))
 
 console.log('내가 작성한 것==========')
 for(let i=0;i<students.length;i++ ){
    if(students[i].enrolled===true){
        const enroll=students[i];
        console.log(enroll)
    }
}

 //////////////////////////////////////////////////
 console.log('7. 학생배열에서 점수만 뽑아서 점수배열로 만드시오')
console.log('정답:배열의 함수중 map을 이용하면 새로운 배열로 받는다==========')
console.log( students.map((s)=>s.name+':'+s.score))