console.log(a); // undefined
var a = 10;
// 의 실제 동작은

var a;
console.log(a); // undefined
a = 10; // 할당이 실행 흐름이 도달했을 때 처리.

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10; // let은 호이스팅이 되지만 초기화가 되지 않음

sayHi(); // ✅ "Hi 오이!"

function sayHi() {
  console.log("Hi 오이!");
}
// 함수는 전체가 끌어올려진다.
// 따라서 함수 선언문은 호이스팅이 되어 호출 가능

sayHello(); // ❌ TypeError: sayHello is not a function
var sayHello = function() {
  console.log("Hello 오이!");
}

// 변수 선언문은 호이스팅이 되지만, 함수 표현식은 호이스팅이 되지 않음
// 따라서 함수 표현식은 호출 불가능 

console.log(foo);  // ✅ undefined
var foo = '바나나';

function bar() {
  console.log(foo);  // ✅ undefined 
  var foo = '사과';
  console.log(foo);  // ✅ 사과
}

bar();
console.log(foo);  // ✅ 바나나

// 함수 bar() 안의 foo는 bar 내부의 var foo
// 내부 foo도 호이스팅되므로 초기값 undefined
// 전역 foo와는 다른 변수임!

baz(); // ❌ ReferenceError: Cannot access 'baz' before initialization
let baz = function() {
  console.log('오이');
};

