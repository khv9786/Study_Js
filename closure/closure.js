{
    let message = "Hello closure!";
    console.log(message);
}

// console.log(message); // ReferenceError: message is not defined
// Closure는 함수가 선언될 때의 환경을 기억하는 기능입니다.
// 즉, 함수가 선언된 위치의 변수들을 기억하고, 그 함수가 실행될 때 그 변수들에 접근할 수 있게 해줍니다.
function createCounter() {
    let count = 0; // 클로저 변수

    return function() { // 클로저 함수
        count++;
        return count;
    };
}

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2

function makeCounter2() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    reset() {
      count = 0;
      return count;
    }
  };
}
// 렉시컬 환경을 기억하는 클로저
let counter2 = makeCounter2();
console.log( counter2.increment() ); // 1
console.log( counter2.increment() ); // 2

/* 렉시컬 환경(Lexical Environment)이란
자바스크립트에서 "함수나 코드 블록이 선언된 위치(문맥)"에 따라 변수와 함수에 접근할 수 있는 범위를 의미합니다.

핵심 개념
렉시컬(Lexical): "코드가 작성된 위치"를 뜻합니다.
환경(Environment): 변수, 함수 등 식별자와 그 값이 저장된 공간입니다.
동작 방식
함수가 선언될 때, 그 함수는 자신이 "어디서 선언되었는지"의 정보를 기억합니다.
함수 내부에서 외부(상위 스코프)의 변수에 접근할 수 있는 이유가 바로 이 렉시컬 환경 덕분입니다.
함수가 실행될 때가 아니라, "선언될 때"의 환경을 기억합니다.
이후 가비지 컬렉션으로 함수 호출 끝나면 메모리에서 제거되지만, 클로저를 통해 참조되는 변수는 계속 유지됩니다.
 */

function outer() {
  let x = 10;
  function inner() {
    return x; // inner는 outer의 x에 접근 가능
  }
  return inner;
}
let fn = outer();
console.log(fn()); // 10

function outer() {
  let x = 10;
  function inner() {
    let y = 20;
    return x; // inner는 outer의 x에 접근 가능
  }
  return inner;
  y
}
let fn2 = outer();
console.log(fn()); // 10
console.log("");

function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));   // ?
console.log(add10(2));  // ?