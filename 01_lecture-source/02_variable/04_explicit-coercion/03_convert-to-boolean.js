// 논리 타입으로 변환

// 1. boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log('JavaScript');  // Truthy값 // JavaScript
console.log(Boolean('JavaScript'));  // Truthy값을 true로 변환      //true
console.log(Boolean(''));            // false
console.log(Boolean(0));             // false

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
console.log(!'JavaScript');         // true 를 false로 바꿔야하기 때문에 자동으로 false로 바꿈
                                    // 그걸 다시 ... 해서 true로 바뀜
// ( 이해 못함.)
console.log(!!1);   // true