const input = document.getElementById("todoInput");
const btn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// btn.addEventListener("click", () => {
//   const value = input.value.trim();
//   if (!value) return;
  
//   const li = document.createElement("li");
//   li.textContent = value;

//   // 삭제 버튼 추가
//   const delBtn = document.createElement("button");
//   delBtn.textContent = "삭제";
//   delBtn.addEventListener("click", () => {
//     li.remove();
//   });

//   li.appendChild(delBtn);
//   list.appendChild(li);

//   input.value = "";
// });

// 현재 방식은 이벤트가 매 항목마다 생기는중.
// 따라서 이벤트 위윔이 필요,

list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const li = e.target.closest("li");
    if (li) li.remove();
  }
});

btn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;
  
  const li = document.createElement("li");
  li.textContent = value + " ";

  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
});

// 이벤트 1개로 나머지 이벤트 관리 가능.
