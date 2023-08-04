const user = {    
    activate : true,    
    login : function(){        
        console.log('로그인 되었습니다.');    
    }
};
function Student(name) {    
    this.name = name;
}

// 여기서의 prototype은 일반적인 프로퍼티
Student.prototype = user;


// F.prototype은 new F를 호출할 때만 사용된다.
// new F를 호출할 때 만들어지는 새로운 객체의 [[Prototype]]을 할당한다.
// student.__proto__ == userlet 
student = new Student("홍길동");

console.log(student.activate);

