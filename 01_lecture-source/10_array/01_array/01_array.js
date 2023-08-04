// 배열은 여러 개의 값을 순차적으로 나열한 자료구조이다.
// 배열이 가지고 있는 값을 요소라 부르며 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.
// 배열은 값을 저장한 순서를 유지하고 있으며, key로 index를 이용하여 관리한다.


// 1. 배열을 리터럴을 통해 생성
const arr = ['바나나', '복숭아', '키위'];
console.table(arr);

// 2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2);
console.log(arr2.length);

// 전달된 인수가 1개이고 숫자 타입인 경우 lenght 프로퍼티에 값이 변경되어
// 전달한 인수 길이만큼의 배열을 생성한다.
const arr3 = new Array(10);
console.log(arr3);
console.log(arr3.length);

// 전달 된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.
const arr4 = new Array(1, 2, 3);
console.log(arr4);
console.log(arr4.length);

// 3. Array.of 메소드
// 전달된 인자를 모두 요소로 가지는 배열을 생성한다.
console.log(Array.of(10));
console.log(Array.of(1, 2, 3));

console.log(arr4[0]);

for(let i = 0; i< arr.length; i++){
    console.log(arr4[i]);
}

console.log(typeof arr4);
for(let key in arr4) {
    console.log(key);
}




// const arr5 = Array.of(10);
// const arr6 = Array.of(1, 2, 3);
// const arr7 = Array.of('hello', 'js');