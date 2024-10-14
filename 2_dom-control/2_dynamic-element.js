let addBtn=document.getElementById("button");  //버튼을 가져오고
let inputBox=document.querySelector('#text1');  //input 요소를 가져온다.
let addBeforeBtn=document.querySelector('#before');
console.log(inputBox);  //querySelector를 사용하면 해당태그의 모든 사항을 가져온다.

addBtn.addEventListener('click', function(){   //가져온 버튼에 이벤트를 달겠다:addEventListener. 어떤이벤트?:click
    let li=document.createElement('li');         //click했을 때 function(){}실행
    let ul=document.querySelector('ul');
    li.textContent=inputBox.value;  //input의 내용을 가져와서 li속성에 값집어넣기
    
    let newBtn=document.createElement('button');
    newBtn.textContent='X';
    newBtn.classList.add('remove-btn');
    newBtn.addEventListener('click', removeParentNode);   //클릭을 했을 때 이벤트를 맨 아래에 있는 removeParentNode에 넘긴다.
    
    li.appendChild(newBtn);
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

 let removeTargetBtn=document.querySelector('#target-remove');  //타겟제거 버튼

 removeTargetBtn.addEventListener('click', function(){
   let targetLi=document.querySelector('#target');  //스쿼트 li태그
    targetLi.remove();

 });

 let removeBtn=document.querySelector('.remove-btn');  //X자 버튼

 removeBtn.addEventListener('click', function(){
    let targetLi=document.querySelector('#target');  //스쿼트 li태그
    targetLi.remove();
 });

 function removeParentNode(event) {
    event.target.parentNode.remove();  
     //parentNode:부모요소를 가져온다..발생한 event의 target속성에 접근하면 현재 클릭한 타겟 요소에 접근할수 있다.
     //즉 X버튼에 접근한다. x버튼의 부모요소는 li->이것을 지운다.
    inputBox.focus();     //커서가 여기에 기본으로 위치하게 만든다.
    inputBox.value = '';  //기존에 입력한 값을 지운다.
  }
