// 숫자 타입으로 변환

    //산술연산자
console.log('산술연산자');
console.log(10 - '5');          //5
console.log(10 * '5');          //50
console.log(10 / '5');          //2
console.log(10 % 'JavaScript'); // NaN


    //비교연산자
console.log('비교연산자');
console.log(10 > '5');

    // 단항연산자
console.log('단항연산자');  //+단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입으로 암묵적 타입 변환 수행
console.log(+'');          // 양수를 나타내는 단항연산자
console.log(+'1');
console.log(+'JavaScript');
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
// console.log(+Symbol());
console.log(+{});
console.log(+[1,2,3]);
console.log(+function() {});