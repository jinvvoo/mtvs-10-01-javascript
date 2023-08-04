// 논리 타입으로 변환
// 자바스크립트 엔진은 boolean 타입이 아닌 Truthy값 (참으로 평가되는 값)
// 또는 Falsy(거짓으로 평가되는 값)값으로 구분햔다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

if(true) {
    console.log('if(true)');       // if(true) 출력
}

if(false){
    console.log('if(false)');      // 출력 건너뜀
}

if(undefined){
    console.log('if(undefinded)'); // 출력 건너뜀
}

if(null) {
    console.log('if(null)');       // 출력 건너뜀
}

if(0) {
    console.log('if(0)');          // 출력 건너뜀
}

if(NaN) {
    console.log('if(NaN)');        // 출력 건너뜀
}

if(''){
    console.log('if("")');         // 출력 건너뜀
}

if('JavaScript'){
    console.log('if("JavaScript")');       // if("JavaScript")
}

// false, underfined, null, 0, NaN, ''(빈문자열)은 Falsy 값이며
// 이 외의 모든 값은 Truthy 값이다.

function test(value){
    if(value) {
        console.log('hello');
    }
}

test('');