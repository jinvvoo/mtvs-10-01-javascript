
/*
여러 줄 주석
여러 줄로 작성할 수 있습니다.
*/

// 한 줄 주석

// 숫자 타입
// 자바스크립트는 정수와 실수를 구분하지 않고 모두 숫자로 취급한다.

var integer = 10;  // 값 = 리터럴
var double = 5.5;
var negative = -10;         // -10.11.11;  컴파일 에러는 아님.

console.log(10 === 10.0);       // java에서는 자동 형변환이 일어남. java에서는 10 == 10 으로 인식.
                                // js에서는 단순 10 = 10.0으로 비교

console.log(10 / 4);            // java에서는 (int)10 / (int)4 = (int)2 인데, js에서는 숫자와 숫자기 떄문에 2.5가 나옴

// 숫자 타입이 표현할 수 있는 특수한 값
// Infinity : 양의 무한대
// -Infinity : 음의 무한대
// NAN(Not a Number) : 산술 연산 불가

console.log(10 / 0);
console.log(10 / -0);
console.log(1 * '문자열');
