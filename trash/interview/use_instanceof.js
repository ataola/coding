console.log(2020 instanceof Number); // false;
console.log('2020' instanceof String); // false
console.log(true instanceof Boolean); // false
function func() {}
console.log(func instanceof Function); // true
console.log({} instanceof Object); // true
console.log(null instanceof Object); // false
console.log(undefined instanceof Object); // false
console.log(Date instanceof Object); // true
console.log(RegExp instanceof Object); // true
console.log(Array instanceof Object); // true
console.log(Function instanceof Object);  // true



