// 문자열을 타입으로 변환

console.log(10 + '20');     // 결과값 : 1020 (자동형변환)

console.log(`10 + 20 : ${ 10 + 20 }`);      // 결과값 : 30

console.log(1 + '');        // 결과값 : 1 (타입은 문자) (= "1")
console.log(true + '');      // "NaN"
console.log(Infinity + ''); // 문자열 리터럴
console.log(true + '');     // "true"
console.log(null + '');     // "null"
console.log(undefined + ''); // "undefinded"

// consolel.log(Symbol() + ''); // "undefined"
//console.log(Sysbol() + ''); // cannot convert a Symbol value to a string

console.log({} + '');       // "[obejct Object]"
console.log([] + '');       //""
console.log(function() {} + ''); // "function() {}"
console.log(function() {});


