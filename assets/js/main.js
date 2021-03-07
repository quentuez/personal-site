const bigInt = 12345678901234567890n;

let isGreater = 4 > 1;
console.log(isGreater);

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object" 
typeof null // "object" 
typeof alert // "function"

let name = prompt('Как тебя зовут?');
alert(`Привет, ${name}!`);

let value = true;
value = String(value);
console.log(typeof value);

let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);

console.log(Boolean("0"));
console.log(Boolean(0));

console.log(8 % 3);
console.log(2 ** 4);
console.log(16 ** (1 / 4));

let s = "my" + "string";
console.log(s);

console.log(6 - '2');
console.log('6' / '2');


let x = 1;
console.log(+x);
let y = -2;
console.log(+y);
console.log(+true);
console.log(+"");

let apples = "2";
let oranges = "3";
console.log(+apples + +oranges);

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a);
console.log(c);

let d, e, f;

d = e = f = 2 + 2;

console.log(d);
console.log(e);
console.log(f);

let n = 2;
n += 5; // n = n + 5
n *= 2; // n = n * 2
console.log(n);

let counter1 = 0;
console.log(++counter1);
let counter2 = 0;
console.log(counter2++);


/* for (a = 1, b = 3, c = a * b; a < 10; a++) {
    ... 
   } */

console.log('А' == 'а');

console.log('01' == 1);

console.log(0 == false);
console.log(0 === false);
