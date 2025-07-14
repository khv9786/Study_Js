//Q1. 아래 코드의 출력 결과를 모두 예측해보세요.
console.log(typeof undefined);        // ?:
console.log(typeof null);             // ?
console.log(typeof NaN);              // ?
console.log(typeof Symbol());         // ?
console.log(typeof BigInt(100));      // ?
console.log(typeof [1, 2, 3]);        // ?
console.log([] == false);             // ?
console.log([] === false);            // ?
//1. undefined
//2. object
//3. number
//4. symbol
//5. bigint
//6. object
//7. true
//8. false

// Q2. 아래 코드에서 this.name은 각각 어떤 값을 가리킬까요?
const obj = {
  name: '오이',
  print: function () {
    console.log(this.name);
  }
};

// undefined: this는 전역 객체를 가리키므로 name이 정의되지 않음
const obj2 = {
    name: '오이',
    print: () => {
        console.log(this.name); // 화살표 함수는 상위 스코프의 this를 사용이라 가능.
    }
}

const fn = obj.print;
fn();         // ?
obj.print();  // ?

// Q3. 클로저를 활용해 버튼 클릭 시 숫자가 증가하도록 incrementer() 함수를 완성하세요:
function incrementer() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const click = incrementer();
click(); // ?
click(); // ? 

// Q4. 아래 코드의 실행 결과를 설명하고, 어떤 에러가 발생하는지 예측해보세요:
// console.log(a); // ?
// let a = 1;

sayHi();        // ?
function sayHi() {
  console.log("Hi 오이");
}

// hello();        // ?
// const hello = function () {
//   console.log("Hello 오이");
// };

//let은 호이스팅은 되지만 값이 초기화 되지 않은 상태로 호출되어 오류 발생 TDZ
//함수 선언문은 호이스팅이 되어 호출 가능
//함수 표현식은 호이스팅이 되지 않음


// Q6. 아래 코드의 출력 순서를 예측하고, var, let, const 차이를 설명하세요:
{
  var x = 10;
  let y = 20;
  const z = 30;
}

console.log(x); // ?
// console.log(y); // ?
// console.log(z); // ?

// 1. 10: var는 함수 스코프이므로 블록 밖에서도 접근 가능
// 2. ReferenceError: let은 블록 스코프이므로 블록 밖에서 접근 불가
// 3. ReferenceError: const도 블록 스코프이므로 블록 밖에서 접근 불가
// 4. var는 호이스팅이 되어 선언은 끌어올려지지만, let과 const는 호이스팅되지만 초기화가 되지 않음

// Q7. 아래 코드에서 i는 왜 항상 5가 출력되는지 설명하고, 수정해서 0~4가 출력되도록 하세요:
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// i가 var로 선언되면 호이스팅되어 for문이 끝난 후에 i가 5가 되어버리므로 5만 출력된다. 하지만
// let으로 선언하면 블록 스코프가 적용되어 각 반복마다 i가 새로 생성되므로
// 0~4가 출력됩니다.



// Q8. 아래 코드의 출력 결과를 예측하고, IIFE를 사용해 수정하세요:
// i가 var로 선언되어 for문이 끝난 후에 i가 3이 되어버리므로
// "Q1: 3"이 3번 출력됩니다. IIFE를 사용하여 각 반복마다 i를 j로 캡처하면
// 0, 1, 2가 출력~

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("Q1:", i);
  }, 100);
}

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log("Q1:", j);
    }, 100);
  })(i);
}

// Q9. 아래 코드의 출력 결과를 예측하고, name 변수를 전역에서 접근 가능하도록 수정하세요:

// function setup() {
//   let name = "오이";
// }
// console.log(name); // ❌ ReferenceError


const name = (function () {
  let value = "오이";
  return value;
})();

console.log(name); // ✅ "오이"
