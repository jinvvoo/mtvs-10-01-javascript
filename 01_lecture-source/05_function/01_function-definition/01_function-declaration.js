// 함수 선언문

/*
function hello() {} //()는 매개변수 선언부 
*/


function hello(name) {    
    return `${name}님 환영합니다`;
}

// hello('홍길동');    // 아무 변화 없다. 이유는 부른 것 뿐

console.log(hello('홍길동'));
console.log();


var hello2 = function hello2(name) {            //var hello2 << 'hello2' 이거 자체도 함수의 이름이 된다.
    return `${name}님 안녕하세요!`
}

console.log(hello2('홍길동'));



/*


var hello2 = function (name) {          //없어도 실행됨
    return `${name}님 안녕하세요!`
}

console.log(hello2('홍길동'));


var hello2 = function hello3(name) {
    return `${name}님 안녕하세요!`
}

console.log(hello3('홍길동'));

*/