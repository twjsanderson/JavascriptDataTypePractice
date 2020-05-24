// Empty array's have a length of 0 OR no length at all
let array = [];

console.log('array length should be 0: ', array.length, array.length === 0)

// A variable with no assignment is undefined
let variable1;

console.log('variable1 should equal undefined: ', variable1, variable1 === undefined)

// Numbers cannot have a length
// We have to turn them into strings to get their length
let num1 = 344432;

console.log('num1 as a string has a length: ', num1.toString().length)
console.log('num1 length should be undefined: ', num1.length, num1.length === undefined)

// Empty string has length of 0 NOT undefined
let str1 = '';

console.log('str1 length should be 0: ', str1.length, str1.length === 0)

// JS expressions are evaluated from left to right
// A number added to a string will become a string
let exp1 = 3 + '5';

console.log("exp1 should be '35': ", exp1, typeof '35' === typeof exp1)

// Add several numbers at the beginning of an expression and they will
// operate as numbers before being merged into a string
let exp2 = 3 + 4 - 1 + '78';

console.log("exp2 should be '678': ", exp2, typeof '678' === typeof exp2)

// JS uses the same data types for numbers and floats
let num3 = 34783;
let float1 = 32.4233;

console.log("num3 type should be the same as float1 type: ", typeof num3 === typeof float1)

// number divided by a string will give you NaN 
console.log("num3 / 'bob' should be NaN: ", typeof num3 / 'bob')

// BUT number divided by a string number will give you the correct mathematical answer but the type will be NaN!
console.log("num3 / '2' should be NaN: ", typeof num3 / 'bob', ' and ', num3 / '2')

// NaN is not equal to any other data type including itself
console.log("NaN should not be equal to NaN:  ", NaN === NaN)

// NaN data type is number
console.log("NaN data type is number: ", typeof NaN === typeof 2)