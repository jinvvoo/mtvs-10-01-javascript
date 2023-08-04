var student = {
    name: '유관순',
    age: 16,
    test: undefined
};

console.log(student.name === undefined);
console.log(student.height === undefined);  //해당 (height) 존재하지 않으면 true 출력.
console.log(student.test === undefined);    // test는 존재함에도 불구하고 true(없다) 출력. 하지만 실제로는 있는데? (이게 문제점)

console.log();    

console.log("name" in student);             // name안에 student가 포함되어 있기에 true 출력
console.log("height" in student);             // height안에 student가 포함되어 있기에 true 출력
console.log("test" in student);             // height안에 student가 포함되어 있기에 true 출력


