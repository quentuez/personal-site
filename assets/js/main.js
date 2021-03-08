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

let name1 = prompt('Как тебя зовут?');
alert(`Привет, ${name1}!`);

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
console.log('а' > 'я');

console.log('01' == 1);

// ===/ !== - строгое неравенство
console.log(0 == false);
console.log(0 === false);

console.log(0 !== false);
console.log(0 != false);

console.log(null === undefined);
console.log(null == undefined);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

/* let condition = (year == 2015);

if (condition) {
  ...
} */

let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
    (age < 18) ? 'Привет!' :
        (age < 100) ? 'Здравствуйте!' :
            'Какой необычный возраст!';
console.log(message);

let x1;
false || (x1 = 1);
console.log(x);

let y1 = 1;
(y1 > 0) && console.log('Greater than zero!');

console.log(!!"non-empty string");
console.log(!!null);

let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
console.log(area);

let z = (1 && 2) ?? 3;
console.log(z);

let i = 3;
while (i != 0) {
    console.log(i);
    i--;
}

let i1 = 0;
for (; i1 < 3; i1++) {
    console.log(i1);
}

let sum = 0;

while (true) {
    let value = +prompt("Введите число", '');
    if (!value) break;
    sum += value;
}
alert('Сумма: ' + sum);

for (let i2 = 0; i < 10; i2++) {
    if (i2 % 2 == 0) continue;
    console.log(i2);
}

/* outer: for (let i3 = 0; i3 < 3; i3++) {
    for (let j3 = 0; j3 < 3; j3++) {
        let input1 = prompt(`Значение на координатах (${i3},${j3})`, '');
        if (!input1) break outer;
    }
}
console.log('Готово!'); */