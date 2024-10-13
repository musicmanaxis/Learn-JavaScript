let addBtn=document.getElementById("button");  //버튼을 가져오고
let inputBox=document.querySelector('#text1');  //input 요소를 가져온다.
console.log(inputBox);  //querySelector를 사용하면 해당태그의 모든 사항을 가져온다.

addBtn.addEventListener('click', function(){   //가져온 버튼에 이벤트를 달겠다:addEventListener. 어떤이벤트?:click
    let li=document.createElement('li');         //click했을 때 function(){}실행
    let ul=document.querySelector('ul');
    li.textContent=inputBox.value;  //input의 내용을 가져와서 li속성에 값집어넣기
    ul.appendChild(li);  //li요소를 추가한다.
});
   
