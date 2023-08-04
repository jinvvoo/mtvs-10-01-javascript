// 정적 타입 언어 ((static / strong) typed language)
// : C언어, C++, Java, Kotlin 등
// 변수를 선언할 때 데이터 타입을 사전에 선언해야 한다.
// 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다.
// 컴파일 시점에 타입 체크를 수행하는데 타입의 일관성을 강제하여 런타임 에러를 줄인다.

// 동적 타입 언어 ((dynamically / weak) typed language)
// : JS, Python
// 타입을 변수를 선언할 시 사용하지 않는 언어
// 선언이 아닌 할당에 의해 타입이 결정되는 언어(타입 추론)
// 재할당에 의해 변수 타입을 언제든지 동적으로 변경할 수 있다.
// 변수의 값이 언제든 변경될 수 있기 때문에 값을 확인하기 전에는 타입에 대한 확신을 가질 수 없다.
// 개발자의 의도와 상관 없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다.
// '작은 코드로 많은 것을 하게 한다' 는 취지.
// 유연성을 높이기 위해 많은 기능을 넣었지만, 신뢰성이 떨어진다. 이유는 '와 이런것도 돼?' 하지만 '난해해..'
// '코드 양도 많아지고 번거로워...' -> '계속해서 업데이트 해주고 있다.'
// 이로 인해 변수를 사용하기 전 데이터 타입 체크를 하기도 하는데 이는 번거롭기도 하고 코드 양이 많이 증가하게 된다.


var test;
console.log(typeof(test));

test = 1;
console.log(typeof(test));

test = 'JavaScript';
console.log(typeof(test));

test = null;
console.log(typeof(test));

test = {};
console.log(typeof test);

test = [1,2,3];
console.log(typeof test);

test = function() {
    console.log('hello world');
}

console.log(typeof test);
test();