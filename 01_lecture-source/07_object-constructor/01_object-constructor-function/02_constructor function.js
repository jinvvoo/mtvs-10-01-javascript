function Student(name, age) {    
    this.name = name;    
    this.age = age;    
    this.getInfo = function() {        
        return `${this.name}(은)는 ${this.age}세입니다.`;    
    }
}

const student = new Student('장보고', 30);      
// 인스턴스의 생성
console.log(student.getInfo());                 
// 메서드 호출

const student2 = {
    name: '홍길동',
    age: 16,
    getInfo: function(){
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }
};

// 생성자 함수에 의한 객체 생성
function student(name, age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}

const student3 = new student('장보고', 30);
const student4 = new student('신사임당', 40);

console.log(student3);
console.log(student4);