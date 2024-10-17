let rectangle=document.querySelector('#rectangle');

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