// 객체는 프로퍼티의 집합이다.
// 프로퍼티는 키와 값으로 구성된다.


var student = {    // 프로퍼티 키는 name, 프로퍼티 값은 '유관순'    
    name : '유관순',    // 프로퍼티 키는 age, 프로퍼티 값은 16    
    age : 16,    // 프로퍼티 나열은 쉼표로 구분하며 마지막 프로퍼티 뒤에 쉼표를 사용해도 된다.
};

console.log(student);

// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 => 프로퍼티 값에 접근하기 위한 식별자
var obj = {
    normal: 'normal value',
    '@ s p a c e @': 'space value',
    '':'',      // 빈 문자열은 오류는 발생하지 않지만, 권장하지 않음.
    0: 1,       // 숫자 키는 내부적으로 문자열로 변환된다.
    var: 'var', // 권장하지 않음
    normal: 'new value'
};

console.log(obj);

var key = 'test';
// obj.key = 'test value';
obj[key] = 'test value';

console.log(obj);