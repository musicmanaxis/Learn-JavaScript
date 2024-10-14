let addBtn=document.getElementById("button");  //버튼을 가져오고
let inputBox=document.querySelector('#text1');  //input 요소를 가져온다.
let addBeforeBtn=document.querySelector('#before');
console.log(inputBox);  //querySelector를 사용하면 해당태그의 모든 사항을 가져온다.

addBtn.addEventListener('click', function(){   //가져온 버튼에 이벤트를 달겠다:addEventListener. 어떤이벤트?:click
    let li=document.createElement('li');         //click했을 때 function(){}실행
    let ul=document.querySelector('ul');
    li.textContent=inputBox.value;  //input의 내용을 가져와서 li속성에 값집어넣기
    ul.appendChild(li);  //li요소를 추가한다.
    //appendChild(): 항상 마지막 자식 요소로 추가하므로, 삽입할 요소만 매개변수로 제공하면 됩니다
   
});

//insertBefore(): 매개변수 두 개 받음. 두 번째 매개변수 위치 앞에, 첫번째 매개변수를 추가하겠다라는 의미 

 addBeforeBtn.addEventListener('click', function(){
    let li=document.createElement('li');  //li태그를 붙이고자 생성
    let ul=document.querySelector('ul');  //li태그를 붙일려면 부모태그가 있어야 해서 가져옴
    let targetLi=document.querySelector('#target');  //앞에 붙일려면 기준점이 있어야 하는데 그 기준점을 가져옴
    li.textContent=inputBox.value;   //input의 내용을 가져와서 li에 담음.
    ul.insertBefore(li, targetLi); //ul태그의 자식태그를 추가하는 방법
 });