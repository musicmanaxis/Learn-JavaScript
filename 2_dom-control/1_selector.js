let items = document.getElementsByClassName('item');  //클래스 이름이 동일한게 여러개 있을 때
console.log(items);
console.log('스쿼트: ', items[0]);   //첫번째거 가져오기..마치 배열처럼
console.log('벤치프레스: ', items[1]);
console.log('데드리프트: ', items[2]);

let liList = document.getElementsByTagName('li');   //태그 명으로 찾기
console.log(liList);

// 2] HTML 요소 쿼리
let h2 = document.querySelector('#title');  //id가 title인것을 가져오기 
console.log('h2: ', h2);

let item = document.querySelector('.item');   //클래스가 item인것을 가져오기 단, 동일한 클래스이름으로 여러개 있엇도 맨위 하나만 가져온다.
console.log('query item: ', item);

let itemAll = document.querySelectorAll('.item');  //동일한 클래스이름이 여러개인경우 querySelectorAll를 사용하면 이런식으로 모두 가져온다.
console.log('itemAll: ', itemAll);
console.log('itemAll[0]: ', itemAll[0]);
console.log('itemAll[1]: ', itemAll[1]);
console.log('itemAll[2]: ', itemAll[2]);


/*
## DOM 이란?
Document Object Model 의 약어로 웹 문서를 제어하기 위해서 웹 문서를 객체화한 것을 말합니다. 
이전 시간에 배웠듯이 객체는 값을 나타내는 `프로퍼티`와 어떠한 수행을 하는 `메서드`를 갖고 있습니다.

이렇게 웹 문서(HTML)를 객체화 함으로써 우리는 객체로 웹 문서를 제어할 수 있습니다.

### 웹 문서 Body에 "Hello World1" 텍스트 삽입

```jsx
document.querySelector('body').innerHTML = 'Hello World!';
document.body.innerHTML = 'Hello World!';
```

### 웹 문서에서 H1 태그 가져와서 삭제하기

```jsx
const $h1 = document.querySelector('h1');
$h1.remove();

  ## DOM 요소 조작하기

---

- **DOM 요소 조회**
    - `getElementById()`
    - `getElementsByTagName()`
    - `querySelector()`
    - `querySelectorAll()`
- **DOM 요소 조작**
    - `dom.textContent` = 'Hello World!';
    - `dom.innerHTML` = 'Hello World!';

## HTMLElement, HTMLCollection, Node, NodeList

---

웹 문서를 제어하기 위해서는 제어하고 싶은 DOM 객체를 가져온 후 객체의 `프로퍼티`나 `메서드`를 통하여 제어할 수 있습니다.

하지만 우리가 이러한 객체로 `프로퍼티`나 `메서드`로 **원하는 작업을 수행하기 위해서는 이 객체가 어떠한 객체인지 이해해야할 필요**가 있습니다.

- `HTMLElement` `HTMLCollection`
    
    get메서드를 통해서 조회한 객체유형입니다.

    ## HTML 조작

---

우리가 HTML에 스타일을 적용 할 때 HTML 요소를 선택한 후에 적절한 CSS 속성을 사용하여 스타일 했듯이HTML 조작도 마찬가지 입니다. HTML 문서를 조작하기 위해서는 HTML 요소를 선택한 후에 함수나 속성을 사용하여 HTML 요소를 제어! 즉 조작할 수 있습니다.

HTML 요소 선택하기
HTML 요소를 선택하는 방법에 대해 알아보도록 하겠습니다.
get 메서드
document.getElementById - 모든 HTML 요소에는 고유한 ID를 할당받을 수 있습니다. getElementById를 이용해 요소를 찾을 수 있습니다.
document.getElementsByClassName - HTML 클래스 명으로 요소를 찾을 수 있습니다.
document.getElementsByTagName - HTML 태그명으로 요소를 찾을 수 있습니다.
예) HTML
<ul id="list">
	<li class="item">
	<li class="item">
	<li class="item">
</ul>
​
예) get 메서드
document.getElementById('list') <!-- ul 선택 -->
document.getElementsByClassName('item') <!-- li태그 3개 선택 -->
document.getElementsByTagName('li') <!-- li태그 3개 선택 -->


```
*/