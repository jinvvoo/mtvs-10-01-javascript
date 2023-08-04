const user = {    
    id : 'user',    
    login : function(){        
        console.log(`${this.id}님 로그인 되었습니다.`);    
    }
};

const student = {    
    __proto__ : user
};

student.id = 'user01';

student.login();            // user01님 로그인 되었습니다.


for(let prop in student) {    
    console.log(prop);    

    let isOwn = student.hasOwnProperty(prop);    
    
    if(isOwn) {        
        console.log(`객체 자신의 프로퍼티 ${prop}`);    
    } 
    else {        
        console.log(`상속 프로퍼티 ${prop}`);    
    }
}