let btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');

btn1.onclick=function(){
  alert('Hllo 프로퍼티 리스너');
};

btn2.addEventListener('click', helloEvent1);   //실무에서 많이 사용하는 방법

btn2.addEventListener('click', function(){   //addEventListener는 동일한 버튼에 2개 이벤트를 등록할 수 있다.
  alert('Hello addEventListener2');
})

function helloEvent1(){
  alert('Hello addEventListener1 ');
}

btn2.removeEventListener('click', helloEvent1);  
 //이밴트를 제거하는 방법, 제거를 할려면 2번째 인자에 함수명을 적어야 하고..함수는 별도로 만들어야 한다.