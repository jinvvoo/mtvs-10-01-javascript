var dog = {    
    name : '뽀삐',    // 메서드 - 객체에 묶여 있는 함수    
    eat : function (food) {        
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);   
    }
};
