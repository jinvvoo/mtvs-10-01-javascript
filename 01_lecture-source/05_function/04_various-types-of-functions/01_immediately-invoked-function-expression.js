// 즉시 실행 함수
// 함수 정의와 동시에 즉시 호출되는 함수로 단 한 번만 호출 되며 다시 호출할 수 없다.

(function() {    
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출!');
})();

(function hello(name) {    
    console.log('가명 즉시 실행 함수! 함수 정의와 동시에 호출!');
    console.log(`${name}님 안녕하세요!`);
})('홍길동');

hello('홍길동');