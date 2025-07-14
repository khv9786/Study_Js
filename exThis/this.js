const obj = {
  name: "오이",
  print: function () {
    console.log(this.name);
  },
};

const print = obj.print;
print();
obj.print();

// 함수에서 this 는 전역 객체를 가리키게 된다. 따라서 name이 정의되지 않아 undefined 출력
// 그렇지만 obj,print()는 obj 객체를 this로 사용하므로'오이'가 출력된다.
// 화살표 함수는 상위 스코프의 this를 사용하므로, obj 객체의 this를 참조하지 않는다.
// this가 어디를 가르키는지 확인해야하는게 중요할듯!@#!#!@#!@#