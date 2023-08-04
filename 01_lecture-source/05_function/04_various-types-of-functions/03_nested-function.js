// 중첩함수
                        // 강의 듣기 (필기용)
function outer() {    

    var outerVal = '외부 함수';   

    function inner() {        
        var innerVal = '내부 함수';        // 외부 함수의 변수를 참조할 수 있다. 

        console.log(outerVal, innerVal);    
    }    

    inner();
}

outer();

// inner(); 호출해도 호출불가. 내부에서만 가능한 걸 호출함.