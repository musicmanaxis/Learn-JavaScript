'use strict';
let text = '';
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    // continue;   //이것을 만나게 되면 아래문장은 수행되지 않고 다시 반복문 처음으로 넘어간다.
    break;     //반복문을 벗어난다.
  }
  text = text + i;
  // console.log(`text[${i}]: `, text);
}
console.log(text);