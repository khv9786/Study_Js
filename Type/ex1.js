// 목표: 자료형 학습
// Let : 블록 스코프
let A = 12;
// let B = 김현빈; // 문자열은 감싸서
// let C = Admin;
let D = [1,2,3,4,5,6,7,8,9,10];
let E = {name: "Bin", age: 27, isAdmin: true};

//const : 블록 스코프
// const는 재할당이 불가능. 단, 객체의 속성은 변경 가능
const A1 = 12;
const B1 = "김현빈";
const C1 = [1,2,4,5,'김','kikm'];
const D1 = {name: "Bin", age: 27, isAdmin: true};
D1.age = 99; // 객체의 속성은 변경 가능
const COLOR_RED = "#F00"; // 상수는 대문자로 작성하는 것이 관례

// Var : 블록스코프 X 전역 스코프
var A2 = 12;
var B2 = "김현빈";
var C2 = [1,2,4,5,'김','kikm'];

if (true) {
    var A3 = 12; // 전역 스코프
    var B3 = "김현빈"; // 전역 스코프
    var C3 = [1,2,4,5,'김','kikm']; // 전역 스코프
    var D3 = {name: "Bin", age: 27, isAdmin: true}; // 전역 스코프
    }
console.log(A3); // 12

/* const A3 = 12; // var로 선언되어 있어서 사용 불가능. */
var A3 = '김현빈'; // var로 선언되어 있어서 사용 가능
console.log(A3); // 김현빈


function test() {  
    console.log(varF); // 12
}
varF = '선언을 늦게해도 실행 가능'; // 할당은 실행 흐름이 도달했을 때 처리.
test(); // 12

/* var로 선언한 변수는 let이나 const로 선언한 변수와 다른 두 가지 주요한 특성.
var로 선언한 변수는 블록 스코프가 아닌 함수 수준 스코프.
var 선언은 함수가 시작되는 시점(전역 공간에선 스크립트가 시작되는 시점)에서 처리. */

typeof NaN       // typeof NaN       //
typeof Symbol()  // typeof undefined //
typeof BigInt(1) // typeof BigInt(1) // bigint
typeof [1,2,3]   // typeof [1,2,3]   // object

var a = 1;
let b = 2;

function test() {
  var a = 3;
  let b = 4;
  console.log(a, b);
}
test();
console.log(a, b);

