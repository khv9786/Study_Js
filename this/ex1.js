const obj = {
  name: '빈',
  func: function() {
    console.log(this.name); // '빈'
  }
};

const arrow = () => {
  console.log(this); // window (혹은 상위 컨텍스트)
};


const obj2= {
  name: '빈',
  sayHi: function() {
    setTimeout(function() {
      console.log(this.name); // 언디파인드 출력. name이 정의되지 않음  
    }, 1000);
  } 
};

const obj3= {
  name: '빈',
  sayHi: function() {
    setTimeout(() => {
      console.log(this.name); // ?
    }, 1000);
  }
};

const obj4= {
  name: '빈',
  sayHi: function() {
    setTimeout(function() {
      console.log(this.name); // ?
    }.bind(this), 1000);
  }
};


obj2.sayHi();
