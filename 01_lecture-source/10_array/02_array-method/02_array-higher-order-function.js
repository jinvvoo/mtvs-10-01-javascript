// 10-2-2. 배열 고차 함수
// 고차 함수 : 함수를 인수로 전달 받거나 함수를 반환하는 함수


// sort
// 배열을 정렬 기준으로 정렬한다.
// 오름차순 정렬이 기본이며 정렬 후 정렬 순서를 유지한다.
// 배열은 기본적으로 문자열 정렬이 되므로 일부 올바르지 않게 정렬 되는 모습을 확인할 수 있다.
// 다른 정렬 기준을 사용하려면 매개변수로 compare 함수 전달해야 한다.

let numbers = [];

for (let i = 0; i < 10; i++) {    
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬 전 numbers : ${numbers}`);

numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);


function compare(a, b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}
// 숫자 오름차순 정렬
numbers.sort(compare);
console.log(`숫자 오름차순 정렬 : ${numbers}`);

// 숫자 내림차순 정렬
numbers.sort(function(a, b) {return b - a;});
console.log(`숫자 내림차순 정렬 : ${numbers}`);

// 숫자 내림차순 정렬
// number.sort(function(a, b) {return b - a});
numbers.sort((a, b) => b - a);
console.log(`숫자 내림차순 정렬 : ${numbers}`);

console.log();

// foreach : for문을 대체할 수 있는 고차함수
const arr = [1, 2, 3, 4 , 5];

arr.forEach(function(item, index, array) {       // 이름이 중요한게 아니고 순서가 중요하다. 
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
});

console.log();

// 각 요소 별로 * 10 한 값을 콘솔에 출력
arr.forEach(item => console.log(item * 10));        // 일반적으로 반복할떄 foreach 사용


//map : 배열 요소 전체를 대상으로 콜백함수 호출 후 반환 값들로 구성된 새로운 배열을 반환

/*배열.
map(function(item, index, array){    // 배열 요소 각각에 반환할 새로운 값
}
);
*/

const types = [true, 1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);            // boolean,number,stringconst 

const lengths = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(`lengths : ${lengths}`);        // 5,6,3,3,3

// filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 반환 값이 true인 요소로만 구성 된 새로운 배열 반환한다.
const odds = numbers.filter(item => item % 2);
console.log(odds);       // [ 1, 3, 5 ]

// reduce : 배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백 함수를 실행하고 그 결과를 반환한다.
arr.reduce(function(prevValue, currValue, currIndex, array) {
    console.log(`prevValue : ${prevValue}`);
    console.log(`currValue : ${currValue}`);
    console.log(`currIndex : ${currIndex}`);
    console.log(`array : ${array}`);
});

const sum = arr.reduce(function(prevValue, currValue) {
    return prevValue + currValue;
});
console.log(`sum : ${sum}`);

// some : 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환한다.

// 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인
let result = [1, 5, 3, 2, 4].some(item  => item > 10);
console.log(`result : ${result}`); // false
// 배열 내 요소 중 3보다 큰 값이 1개 이상 존재하는지 확인
result = [1, 5, 3, 2, 4].some(item  => item > 3);
console.log(`result : ${result}`);  // true
// 배열 내 요소 중 특정 값이 1개 이상 존재하는지 확인
result = ['apple', 'banana', 'cat', 'dog'].some(item  => item === 'egg');
console.log(`result : ${result}`); // false
result = ['apple', 'banana', 'cat', 'dog'].some(item  => item === 'dog');
console.log(`result : ${result}`);  // true


// every
// 배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환한다.

result = [1, 5, 3, 2, 4].every(item  => item > 3);
console.log(`result : ${result}`); // false

// 배열 내 요소 중 3보다 큰 값이 1개 이상 존재하는지 확인
result = [1, 5, 3, 2, 4].every(item  => item > 0);
console.log(`result : ${result}`);  // true

console.log();


// find : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백 함수를 실행하여 
//그 결과가 참인 첫번째 요소를 반환하고, 참인 요소가 존재하지 않는다면 undefined를 반환
// findIndex : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환하고, 참인 요소가 존재하지 않는다면 -1을 반환

const students = [    
    { name : '유관순', score : 90 },    
    { name : '홍길동', score : 80 },    
    { name : '장보고', score : 70 }
];

result = students.find(item => item.name === '유관순');
console.log(result);    // { name: '유관순', score: 90 }

result = students.findIndex(item => item.name === '유관순');
console.log(result);    // 0

result = students.find(item => item.name === '신사임당');
console.log(result);    // undefined

result = students.findIndex(item => item.name === '신사임당');
console.log(result);    // -1

result = students.find(item => item.score >= 60);
console.log(result);    // { name: '유관순', score: 90 }
result = students.filter(item => item.score >= 60);
console.log(result);    // 배열 반환