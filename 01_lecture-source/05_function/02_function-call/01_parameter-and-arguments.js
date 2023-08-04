// 파라미터 : 매개변수 (공간) (받는거)
// 아규먼트 : 인자 (함수 호출시 넘기는값) (값) (전달)

function hello(name) {      //name 이 매개변수, 함수 내부에서만 사용 가능
    
    console.log(name);
    
    // console.log(arguments);

    return `${name}님 안녕하세요!`
}

// console.log(name);       // 외부에서는 호출 불가능

var result = hello('홍길동');
console.log(result);

result = hello('이게돼?');
console.log(result);

result = hello('홍길동', '유관순');
console.log(result);


function hi(name = '아무개') {
    return `${name} 안녕~`;
}

result2 = hi();
console.log(result2);

result2 = hi('아무개무개');
console.log(result2);

