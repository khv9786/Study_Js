// 목표: 비교 연산자 차이에 대해 학습

console.log(5 > 3); // true
console.log(5 < 3); // false 

let result = 5 > 3; 
console.log(result); // true


console.log('abc' > 120); //false
console.log('abc' > 'ab'); // true
console.log('2' > 1); // true

let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true

console.log(a == b); // true!

//== 은 0과 "0"을 같다고 판단 및 false로 판단하지 않음
// === 는 자료형까지 비교

console.log( 0 == false ); // true
console.log( 0 === false ); // false  

console.log( 0 == null ); // false
console.log( 0 === null ); // false
console.log( null == undefined ); // true
console.log( null === undefined ); // false
console.log( 1 == true ); // true
console.log( 1 === true ); // true  
// 결국 == 는 자료형을 무시하고 !!!값!!!만 비교
// === 는 자료형까지 비교. null은 undefined와 같지만 자료형이 다르기 때문에 false
