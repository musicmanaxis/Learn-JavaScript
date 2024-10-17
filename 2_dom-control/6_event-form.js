let inputBox=document.querySelector('#input-box');

// 브라우저에서 이벤트객체를 주는데 이벤트객체자체에 다양한 메서드와 속성을 가지고 있고 그것을 통해 여러가지를 다룰수 있다

inputBox.addEventListener('keypress', function(event){   //빈칸에 키보드를 입력하면 숫자가 올라간다.
  console.log('keypress');
});


inputBox.addEventListener('keypress', function(event){   
  console.log('event.key:', event.key);   //키보드 타이핑 한것이 콘솔에 나타난다.
});

// inputBox.addEventListener('focus', function(event){   //inputbox에 클릭하면 마우스가 깜박일때 이벤트가 발생한다.
//   alert('focus')
// });

// inputBox.addEventListener('blur', function(event){   //inputbox에서 다른곳으로 클릭했을 때 포커스가 사라지며 발생하는 이벤트
//   alert('blur')
// })


// ### 폼 이벤트
// `submit` - 양식(Form)이 제출하기전에 발생 하는 이벤트 입니다. 주로 전송될 값을 유효성 체크할 때 사용합니다.

let img = document.querySelector('img');
img.addEventListener('error', function (event) {   //에러 이벤트를 이용해서 실패했을 때 사과이미지를 보여준다.
  console.log('error');
  event.target.src = './img/apple.jpg';
});