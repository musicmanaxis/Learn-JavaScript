let rectangle=document.querySelector('#rectangle');
let body=document.querySelector('body');

body.addEventListener('click', function (event) {
  console.log('pageX: ', event.pageX, 'pageY: ', event.pageY);
  let div = document.createElement('div');
  div.classList.add('circle');
  div.style.left = event.pageX - 25 + 'px';
  div.style.top = event.pageY - 25 + 'px';
  body.appendChild(div);
});

rectangle.addEventListener('mousedown', function(event){  //마우스를 눌렀을 때 발생하는 이벤트
  console.log('mouseDown');
});

rectangle.addEventListener('mouseup', function(event){    //마우스를 뗐을 때
  console.log('mouseUp');
});

rectangle.addEventListener('mouseenter', function(event){  //마우스가 사각형안으로 들어갈 때
  console.log('mouseEnter');
});

rectangle.addEventListener('mouseleave', function(event){ //마우스가 사각형 바깥으로 나갈 때
  console.log('mouseLeave');
});

rectangle.addEventListener('mousemove', function(event){  //마우스가 사각형안에서 움직일 때
  console.log('mouseMove');
});

rectangle.addEventListener('mousedown', function(event){  //마우스를 눌렀을 때 브라우저상 x,y의 좌표값을 표시
  console.log('clientX: ', event.clientX, 'clientY: ', event.clientY);  //화면이 보여지는 그 자체
});

rectangle.addEventListener('mousedown', function(event){  //마우스를 눌렀을 때 페이지상 x,y의 좌표값을 표시
  console.log('pagetX: ', event.pageX, 'pageY: ', event.pageY);  //마우스 스크롤다운할 정도로 페이지가 길어지면 y값이 달라짐
});