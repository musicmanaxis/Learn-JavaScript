let items = document.getElementsByClassName('item');  //클래스 이름이 동일한게 여러개 있을 때
console.log(items);
console.log('스쿼트: ', items[0]);   //첫번째거 가져오기..마치 배열처럼
console.log('벤치프레스: ', items[1]);
console.log('데드리프트: ', items[2]);

let liList = document.getElementsByTagName('li');   //태그 명으로 찾기
console.log(liList);

// 2] HTML 요소 쿼리
let h2 = document.querySelector('#title');  //id가 title 인것을 가져오기 
console.log('h2: ', h2);

let item = document.querySelector('.item');   //클래스가 item인것을 가져오기 단, 동일한 클래스이름으로 여러개 있엇도 맨위 하나만 가져온다.
console.log('query item: ', item);

let itemAll = document.querySelectorAll('.item');  //동일한 클래스이름이 여러개인경우 querySelectorAll를 사용하면 이런식으로 모두 가져온다.
console.log('itemAll: ', itemAll);   //item클래스중에서 맨위의것만 가져온다. 하위것들을 가져올려면 아래처럼 인덱스를 사용
console.log('itemAll[0]: ', itemAll[0]);
console.log('itemAll[1]: ', itemAll[1]);
console.log('itemAll[2]: ', itemAll[2]);

//h2.textContent ='운동!!';  //h2테그의 내용을 textContent이용하여 내용 변경이 가능하다.
 //h2.textContent = '<span>운동!!!</span>';   //span태그도 텍스트로 인식하여 태그마저 그대로 출력된다.
 h2.innerHTML = '<span>운동@@@</span>';    //span태그는 태그로 인식하여 태그를 제외한 텍스트가 출력된다.
console.log('h2!!:', h2);

// document.querySelector('body').innerHTML = '><strong>운동</strong';  //body안에 태그들이 다 사라진다.<strong>운동</strong>만 남음

let input = document.querySelector('input');  //input 태그에 해당하는 모든 내용을 가져오고...
input.setAttribute('placeholder', '헬스 운동을 입력해주세요!');   //input태그가 가지고 있는 placeholder속성에 값을 다른것으로 변경
input.setAttribute('required', '');
input.removeAttribute('placeholder');  //속성삭제
input.removeAttribute('required');
// 개인의견:연습해보니 querySelector()를 사용하는 것이 좋아보임, querySelector(태그명), querySelector(.클래스명), querySelector(#아이디명)


//HTML 요소 스타일링
let helloItem = document.querySelector('.hello');  /*hello클래스이름을 가진 컨텐츠를 포함한 태그자체를 전부가져온다. */
console.log('helloItem:', helloItem);
// helloItem.style.color = 'white';  //style속성을 이용하여 변경 
// helloItem.style.backgroundColor = 'black';

helloItem.classList.add('dark', 'one');   /*classList - classList 객체를 사용하여 dark, one이라는 클래스 여러이름으로 추가 */
//helloItem.classList.remove('one');    //one이라고 이름을 준 클래스네임 하나를 제거



/*
## DOM 이란?
Document Object Model 의 약어로 웹 문서를 제어하기 위해서 웹 문서를 객체화한 것을 말합니다. 
이전 시간에 배웠듯이 객체는 값을 나타내는 `프로퍼티`와 어떠한 수행을 하는 `메서드`를 갖고 있습니다.
이렇게 웹 문서(HTML)를 객체화 함으로써 우리는 객체로 웹 문서를 제어할 수 있습니다.

### 웹 문서 Body에 "Hello World1" 텍스트 삽입
document.querySelector('body').innerHTML = 'Hello World!';
document.body.innerHTML = 'Hello World!';


### 웹 문서에서 H1 태그 가져와서 삭제하기
const $h1 = document.querySelector('h1');
$h1.remove();

  ## DOM 요소 조작하기
- **DOM 요소 조회**
    - `getElementById()
    - `getElementsByTagName()
    - `querySelector()
    - `querySelectorAll()

- **DOM 요소 조작**
    - `dom.textContent` = 'Hello World!';
    - `dom.innerHTML` = 'Hello World!';

## HTMLElement, HTMLCollection, Node, NodeList
웹 문서를 제어하기 위해서는 제어하고 싶은 DOM 객체를 가져온 후 객체의 `프로퍼티`나 `메서드`를 통하여 제어할 수 있습니다.
하지만 우리가 이러한 객체로 `프로퍼티`나 `메서드`로 **원하는 작업을 수행하기 위해서는 이 객체가 어떠한 객체인지 이해해야할 필요**가 있습니다.

- `HTMLElement` `HTMLCollection 
    
    get메서드를 통해서 조회한 객체유형입니다.

    ## HTML 조작
        우리가 HTML에 스타일을 적용 할 때 HTML 요소를 선택한 후에 적절한 CSS 속성을 사용하여 스타일 했듯이HTML 조작도 마찬가지 입니다.
        HTML 문서를 조작하기 위해서는 HTML 요소를 선택한 후에 함수나 속성을 사용하여 HTML 요소를 제어! 즉 조작할 수 있습니다.

-HTML 요소 선택하기

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

        DOM 메서드가 반환하는 커렉션은 자바스크립트 배열이 아니라 HTMLCollection의 인스턴스로, 배열 비슷한 객체입니다.

        ### DOM 요소 쿼리

        get 메서드와 같은 방법도 유용하지만,
         ID나 클래스, 태그 이름 같은 한 가지 조건이 아니라 다른 요소와의 관계를 사용해 원하는 요소를 찾는 훨씬 더 강력하고 범용적인 메서드도 있습니다.
        `querySelector`와 `querySelectorAll`은 **CSS 선택자를 사용해 요소를 찾는 메서드**입니다.

- `document.querySelector(CSS Selector)` - 지정된 선택자에 일치하는 **문서 내 첫 번째 요소를 반환**합니다. 
                                            일치하는 요소가 없으면 **null**을 반환합니다.
- `document.querySelectorAll` - 지정된 선택자에 **일치하는 요소 목록**을 반환합니다.


## HTML 요소 조작하기
### 콘텐츠 수정하기(속성을 이용): 모든 요소에는 `textContent`와 `innerHTML` 프로퍼티가 있습니다. 
                        이 프로퍼티를 통해 요소의 콘텐츠를 가져오거나 수정할 수 있습니다.
 
- `textContent` - HTML 태그를 모두 제거하고 순수한 텍스트 데이터만 제공합니다.
- `innerHTML` - HTML 태그를 그대로 제공합니다.

### 속성 제어하기(메서드를 이용해서 조작)

- `setAttribute` - 요소에서 주어진 이름의 속성값을 입력합니다.
- `getAttribute` - 요소에서 주어진 속성의 값을 가져옵니다.
- `removeAttribute` - 요소에서 주어진 이름의 속성을 제거합니다.


HTML 요소 스타일링
    1.요소 프로퍼티 직접 수정:style - style 프로퍼티를 사용하여 직접 수정
    const btn = document.getElementById('button');
    btn.style.color = 'white';
    btn.style.backgroundColor = 'black';
​
    2.CSS 클래스 이용: classList - classList 객체를 사용하여 class 를 수정
    const btn = document.getElementById('button');
    btn.classList.add('dark')
    btn.classList.remove('dark')


*/