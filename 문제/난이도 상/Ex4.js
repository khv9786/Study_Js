function setup() {
  const button = document.getElementById("btn");
  button.addEventListener("click", () => {
    console.log("클릭됨");
  });
}

// 페이지에서 setup을 여러번 호출하면 어떤 문제가 발생할까? 해결 방법은?

// 중첩되면 될수록 리스너가 쌓여서 중복 실행-> 누수 일거 같네.

function setup() {
  const button = document.getElementById("btn");
  button.replaceWith(button.cloneNode(true)); // 기존 핸들러 제거
  const newButton = document.getElementById("btn");
  newButton.addEventListener("click", () => {
    console.log("클릭됨");
  });
}
// 이제는 중복으로 눌리면 기존껄 제거하면서 실행되게 변경