function createAsyncCounter() {
  let count = 0;

  return async function () {
    count++;
    await new Promise((res) => setTimeout(res, 100));
    console.log("Count:", count);
  };
}

const counter = createAsyncCounter();

counter();
counter();
counter();

// 비 동기로 진행되는데 동기로 변경하려면
// await를 사용하여 비동기 함수를 동기적으로 처리 가능.
async function runCounter() {
  await counter(); // 첫 번째 호출
  await counter(); // 두 번째 호출
  await counter(); // 세 번째 호출
}