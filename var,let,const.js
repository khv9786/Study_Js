const name = "오이";
// name = "김오이"; // ❌ 에러

let count = 0;
count += 1;       // ✅ 가능

if (true) {
  let msg = "블록 스코프";
  console.log(msg); // ✅ OK
}
// console.log(msg); // ❌ 에러 (let은 블록 스코프)

function testVar() {
  if (true) {
    var x = "함수 스코프";
  }
  console.log(x); // ✅ OK (var은 함수 스코프)
}
