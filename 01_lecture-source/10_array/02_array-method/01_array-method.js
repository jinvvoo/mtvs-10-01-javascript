// 배열 메소드
const arr = [];

// 배열의 생성자 함수는 
console.log(arr.constructor === Array);    // true

// 배열의 프로토타입 객체는 
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
// => Array.prototype은 배열을 위한 빌트인 메서드를 제공한다.

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];    // 중복 데이터 고의 삽입

// indexof는 Array.prototype.indexOf : 배열에서 요소가 위치한 인덱스를 리턴
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`);               // 0
console.log(`foodList.indexOf('물회', 1) : ${foodList.indexOf('물회', 1)}`);         // 4
console.log(`foodList.indexOf('삼겹살') :  ${foodList.indexOf('삼겹살')}`);          // -1  찾지 못했을 때 대표적인 값으로 사용

// lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf('물회')}`);       // 4
console.log(`foodList.lastIndexOf('물회', 1) : ${foodList.lastIndexOf('물회', 1)}`); // 0
console.log(`foodList.lastIndexOf('삼겹살') : ${foodList.lastIndexOf('삼겹살')}`);   // -1 찾지 못했을 때 대표적인 값으로 사용

// includes : 배열에 해당 요소 포함 여부 리턴
console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`);             // true
console.log(`foodList.includes('삼겹살') : ${foodList.includes('삼겹살')}`);         // false



