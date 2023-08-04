// 1. 변수 중복 선언 금지

let msg = '안녕하세요';
// let msg = '안녕히가세요';   

// Syntax Error

// 2. 블록 레벨 스코프
let i = 0;
for(let i = 0; i < 10; i++) {    
    console.log(`지역 변수 i : ${i}`)
}
console.log(`전역 변수 i : ${i}`);


// 3. 변수 호이스팅
// console.log(x);   
// ReferenceError: Cannot access 'x' before initializationlet x;
// 하지만 변수 호이스팅이 발생하지 않는 것은 아니다.

let y = 1;if(true){    
    // 변수 호이스팅으로 아래의 지역변수 y 선언이 먼저 일어났기 때문에 전역 변수 y를 참조하지 않고 오류가 발생한다.    
    // console.log(y); 
    // ReferenceError: Cannot access 'y' before initialization    
    let y = 2;
}