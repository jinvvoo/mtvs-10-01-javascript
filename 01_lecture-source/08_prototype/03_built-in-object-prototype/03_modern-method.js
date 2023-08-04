

const user = {    
    activate: true
};
// Object.create(proto) : [[Prototype]]이 proto를 참조하는 빈 객체를 만듦
// 프로토타입이 user인 새로운 객체를 생성
const student = Object.create(user);
console.log(student.activate);                        // true

// Object.getPrototypeOf(obj) – obj의 [[Prototype]]을 반환
console.log(Object.getPrototypeOf(student) === user);  // true

// Object.setPrototypeOf(obj, proto) – obj의 [[Prototype]]이 proto가 되도록 설정
Object.setPrototypeOf(student, {}); // student의 프로토타입을 {}으로 변경
console.log(Object.getPrototypeOf(student) === user);  // false