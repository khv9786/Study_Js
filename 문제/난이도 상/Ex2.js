// 단점 및 장점, 개선할 부분을 설명하고, 개선하기

// const list = document.getElementById("itemList");
// list.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     console.log("선택된 아이템 ID:", event.target.dataset.id);
//   }
// });


// const list = document.getElementById("itemList");
// list.addEventListener("click", (event) => {
//   // 클릭된 요소에서 가장 가까운 li를 찾음
//   const li = event.target.closest("li");
//   if (li && list.contains(li)) {
//     console.log("선택된 아이템 ID:", li.dataset.id);
//   }
// });

list.addEventListener("click", (event) => {
  const target = event.target.closest("li");
  if (!target || !list.contains(target)) return;
  const id = target.dataset.id;
  console.log("선택된 ID:", id);
});

// data id가 없는 경우 예외처리도 필요.