const arr = [
    '홍길동',
    20,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function(){}
];

console.table(arr);

console.log(Object.getOwnPropertyDescriptors(arr));

/*
{  
    '0': { value: 1, writable: true, enumerable: true, configurable: true },  
    '1': { value: 2, writable: true, enumerable: true, configurable: true },  
    '2': { value: 3, writable: true, enumerable: true, configurable: true },  
    length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/
