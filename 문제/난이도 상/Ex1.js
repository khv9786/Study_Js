// 만약 fetch 실패 시 어떻게 예외 처리할까? 함수 수정하기.
// async function fetchUsers() {
//   const response = await fetch("https://api.example.com/users");
//   const data = await response.json();
//   return data.map((user) => ({
//     id: user.id,
//     name: user.name.trim(),
//     email: user.email.toLowerCase(),
//   }));
// }

// 재시도 전략과 예외 처리 추가하기
async function fetchUsers(retries = 3) {
  try {
    const response = await fetch("https://api.example.com/users");
    if (!response.ok) throw new Error("네트워크 에러");
    const data = await response.json();
    return data.map((user) => ({
      id: user.id,
      name: user.name.trim(),
      email: user.email.toLowerCase(),
    }));
  } catch (error) {
    if (retries > 0) {
      console.warn("재시도 중...", retries);
      return fetchUsers(retries - 1);
    } else {
      alert("데이터를 불러오지 못했습니다.");
      throw error;
    }
  }
}