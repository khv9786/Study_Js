// 위 코드의 문제점과 실무에서 어떻게 고칠지 설명하고 수정하기.
const urls = [
  "/api/data1",
  "/api/data2",
  "/api/data3",
];

// for (const url of urls) {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// await로 순차적으로 가져오니까 느린데 병렬로 처리해야 빠를듯!
// Promise.all을 사용해서 병렬로 처리

const results = await Promise.all(
  urls.map((url) => fetch(url).then((res) => res.json()))
);

results.forEach((data) => console.log(data));
