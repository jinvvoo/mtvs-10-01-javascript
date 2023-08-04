// 숫자 타입으로 변환

// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(typeof Number('10'));       // nunmber
console.log(Number(true));              // 1

// 2. parseInt, parseFloat 함수 이용
console.log(parseInt('10'));            // 10
console.log(typeof parseInt('10'));     // number
console.log(parseFloat('10'));          // 10
console.log(parseInt('10.01'));         // 10 (인트로 바꿀 수 있는 것까지만 바꿔준다.)
console.log(parseFloat('10.01'));       // 10 (실수로 인식할 수 있는 범위까지 바꿔준다.)

// 3. * 산술 연산자 이용
console.log('10' * 1);                  // 10
console.log('10.01' * 1);               // 10.1
console.log(true * 1);                  // 1

