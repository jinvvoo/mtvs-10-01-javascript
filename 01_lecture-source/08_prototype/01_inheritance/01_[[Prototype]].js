// [[Prototype]]
// 자바스크립트의 객체는 [[Prototype]]이라는 숨김 프로퍼티를 갖는다. 
// 이 프로퍼티 값은 null이거나 다른 객체에 대한 참조가 되는데, 
// 다른 객체를 참조하는 경우 참조 대상을 프로토타입(prototype)이라 부른다. 
// object에서 프로퍼티를 읽으려 할 때 해당 프로퍼티가 존재하지 않는 경우
// 자바스크립트는 자동으로 prototype에서 프로퍼티를 찾는다.
// 이것을 프로토타입 상속이라고 한다.

const user = {    
    activate : true,
    login : function(){
        console.log('로그인 되었습니다.');
    }
};

const student = {
    passion : true
};

// __proto__ 는 [[prototype]]의 setter getter 역할을 하는 프로퍼티이다.
student.__proto__ = user;

// 프로퍼티 activate를 student에서도 사용 가능
console.log(student.activate);

// 메소드 login도 student를 통해 호출 가능
student.login();

// student는 유저를 상속받는다.



console.log(student.passion);
