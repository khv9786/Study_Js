console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");


// Promise then과 setTimeout의 실행 순서
// 1. 현재 스크립트 실행 (A, D)
// 2. setTimeout 큐에 B 추가
// 3. Promise 큐에 C 추가
// 4. 현재 스크립트 실행이 끝나면 이벤트 루프가 setTimeout 큐를 먼저 처리
// 5. setTimeout 큐에서 B 실행
// 6. 이벤트 루프가 Promise 큐를 처리하여 C 실행
// 7. 최종 출력: A, D, B, C

// 결론적으로 setTimeout은 Promise보다 먼저 실행~!~!