function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

// 만약 외부에서 count 값을 직접 바꾸는 걸 막으려면 어떻게 설계할까?
// 클로저를 통해서 캡슐화를 진행.