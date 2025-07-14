function fetchData(callback) {
  setTimeout(() => {
    const data = "오이 데이터";
    callback(data); // 나중에 실행됨
  }, 1000);
}

fetchData(function (result) {
  console.log("콜백 결과:", result);
});
// 위 코드는 fetchData 함수가 1초 후에 데이터를 가져오고, 그 결과를 콜백 함수로 전달합니다.
// 콜백 함수는 데이터를 받아서 콘솔에 출력합니다.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "오이 데이터";
      resolve(data);
    }, 1000);
  });
}

fetchData().then((result) => {
  console.log("프로미스 결과:", result);
});
// 위 코드는 fetchData 함수가 프로미스를 반환하고, 1초 후에 데이터를 가져와서 resolve 함수를 호출합니다.
// then 메서드를 사용하여 프로미스가 완료되면 결과를 받아서 콘솔에 출력합니다.


async function getData() {
  try {
    const result = await fetchData();
    console.log("await 결과:", result);
  } catch (e) {
    console.error("에러 발생:", e);
  }
}

getData();
// 위 코드는 async/await를 사용하여 fetchData 함수를 호출하고, 결과를 기다린 후 콘솔에 출력합니다.
// async 함수는 항상 프로미스를 반환하며, await 키워드를 사용하여 프로미스가 완료될 때까지 기다립니다.

//프로미스를 쓰는 이유는?

// 비동기 await으로 변경

function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 500);
  });
}

getNumber().then((num) => {
  console.log("Q2 결과:", num);
});

async function main() {
  const num = await getNumber();
  console.log("Q2 결과:", num); // ✅ 42
}

main();

// 실행 순서
async function test() {
  console.log("a");
  await Promise.resolve(); // 마이크로태스크에 등록됨
  console.log("b");
}

test();
console.log("c");

// 실행 순서:
// 1. "a" 출력 2. test 함수가 호출되어 마이크로태스크에 등록됨
// 3. "c" 출력 4. 마이크로태스크가 실행되어 "b" 출력

console.log("마이크로태스크 추가 전");
queueMicrotask(() => {
  console.log("마이크로태스크를 실행했습니다.");
});
console.log("마이크로태스크 추가 후");

// 현재 await도 있고, 마이크로태스크도 있는 상태
// 실행 순서: 동기인 a와 c, '마이크로태스크 추가 전'이 먼저 실행되고, '마이크로태스크 추가 후'가 출력됩니다.
// 이후 await 프로미스가 나오면서 b 출력, 다음 마이크로태스크가 실행되어 '마이크로태스크를 실행했습니다.'가 출력됩니다.
// await가 걸린 Q2결과 42 출력하고,
// 이후 프로미스 결과 오이 데이터 출력, await 100 결과 오이데이터 출력.

// 결론!
// 1. 동기 코드가 먼저 실행
// 2. 마이크로태스크 큐 처리 FIFO
// 3. await가 있는 비동기 코드가 실행되면, 해당 프로미스가 해결될 때까지 기다림


// Promise.all 예제
// 여러 프로미스를 병렬로 처리하고, 모든 프로미스가 완료되어야 성공
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then((results) => {
  console.log("✅ all 결과:", results); // [1, 2, 3]
});


// Promise.all은 하나라도 rejact되면 전체가 실패
const p4 = Promise.resolve(1);
const p5 = Promise.reject("실패!");

Promise.all([p4, p5])
  .then(console.log)
  .catch((err) => console.error("❌ all 실패:", err));


// Promise race 예제
// 여러 프로미스 중 가장 먼저 완료된 프로미스의 결과를 반환 
// !! 실패가 먼저되면 reject됨
const slow = new Promise((res) => setTimeout(() => res("느림"), 1000));
const fast = new Promise((res) => setTimeout(() => res("빠름"), 100));

Promise.race([slow, fast]).then((result) => {
  console.log("⚡ race 결과:", result); // "빠름"
});


// Promise.any 예제
// a~e 각각 성공/실패와 시간을 다르게 설정
const a = new Promise((resolve) => setTimeout(() => resolve("a 성공 (1초)"), 1000));
const b = new Promise((_, reject) => setTimeout(() => reject("b 실패 (0.5초)"), 500));
const c = new Promise((resolve) => setTimeout(() => resolve("c 성공 (2초)"), 2000));
const d = new Promise((_, reject) => setTimeout(() => reject("d 실패 (1.5초)"), 1500));
const e = new Promise((resolve) => setTimeout(() => resolve("e 성공 (0.8초)"), 800));

// Promise.any: 가장 먼저 성공한 프로미스의 결과만 반환 (실패는 무시)
Promise.any([a, b, c, d, e])
  .then((result) => {
    console.log("🌟 any 결과:", result); // e 성공 (0.8초) 예상
  })
  .catch((err) => {
    console.error("❌ any 실패:", err);
  });

// 모든 결과를 보고 싶으면 allSettled 사용
Promise.allSettled([a, b, c, d, e]).then((results) => {
  console.log("🧾 allSettled:", results);
});


Promise.all([
  Promise.resolve("A"),
  Promise.reject("B"),
  Promise.resolve("C"),
])
  .then(console.log)
  .catch(console.error);

  // Promise.all은 모든 프로미스가 성공해야 결과를 반환.
  // 따라서 B에서 reject이므로 catch로 넘어가서 "B"가 출력. 에러 잡을때 좋겠네.
