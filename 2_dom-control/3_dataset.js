// dataset 프로퍼티로 데이터(data-) 속성을 읽거나 수정할 수 있습니다.

let h2=document.querySelector('h2');
 console.log('h2.dataset.test:', h2.dataset.test); 
 //.test는 data-test를 가리킨다. html파일에 있는 h2태그의 data-test의 내용: hello test를 가져온다.

 let liList=document.querySelectorAll('li');
 let img=document.querySelector('img');
 let selectedItem=document.querySelector('.selected-item');

liList[0].addEventListener('click', selectItem);  //selectItem는 함수이며 하단에 거기에 관한 것을 정의해놨다..
liList[1].addEventListener('click', selectItem);
liList[2].addEventListener('click', selectItem);

function selectItem(event){
  selectedItem.textContent=event.target.textContent;
  //클릭했을 때의 event가 발생으로 인한  target은 li를 가리킨다..li에서 textContent로 내용을 가져온다.
  img.setAttribute('src', event.target.dataset.img);
}


