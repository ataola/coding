console.log(typeof 2020); // number
console.log(typeof '2020'); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof 1n); // bigint
console.log(typeof Symbol()); // symbol
console.log(typeof [2, 0, 2, 0]); // object
function func(){}
console.log(typeof func); // function
console.log(typeof func()); // undefined
console.log(typeof new func()); // object

console.log(typeof Number); // function
console.log(typeof String); // function
console.log(typeof Boolean); // function
console.log(typeof Symbol); // function
console.log(typeof BigInt); // function
console.log(typeof Object); // function
console.log(typeof Array); // function
console.log(typeof Function); // function
console.log(typeof RegExp); // function
console.log(typeof Date); // function
console.log(typeof Math); // object
console.log(typeof globalThis); // object
console.log(typeof global); // object nodejs环境下
console.log(typeof window); // object 浏览器环境下
console.log(typeof Class); // undefined

console.log(typeof Number()); // number
console.log(typeof String()); // string
console.log(typeof Boolean()); // boolean
console.log(typeof Array()); // object
console.log(typeof Function()); // function
console.log(typeof RegExp()); // object
console.log(typeof Date()); // string
console.log(typeof Symbol()); // symbol

console.log(typeof new Number()); // object
console.log(typeof new String()); // object
console.log(typeof new Boolean()); // object
console.log(typeof new Array()); // object
console.log(typeof new Function()); // function
console.log(typeof new RegExp()); // object
console.log(typeof new Date()); // object
