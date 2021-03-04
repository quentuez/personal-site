const bigInt = 12345678901234567890n;

let str = "hello";

let name = "Иван";
alert( `Привет, ${name}!` );

let isGreater = 4 > 1;
alert( isGreater );

let age = null;

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object" 
typeof null // "object" 
typeof alert // "function"