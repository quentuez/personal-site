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

/* for (let i2 = 0; i < 10; i2++) {
    if (i2 % 2 == 0) continue;
    console.log(i2);
} */

/* outer: for (let i3 = 0; i3 < 3; i3++) {
    for (let j3 = 0; j3 < 3; j3++) {
        let input1 = prompt(`Значение на координатах (${i3},${j3})`, '');
        if (!input1) break outer;
    }
}
console.log('Готово!'); */

let a5 = "1";
let b5 = 0;

switch (+a5) {
    case b5 + 1:
        console.log("Выполнится, т.к. значением +a5 будет 1, что в точности равно b5+1");
        break;
    default:
        console.log("Это не выполнится");
}

let a6 = 2 + 2;
switch (a6) {
    case 4:
        console.log('Правильно!');
        break;
    case 3:
    case 5:
        console.log('Неправильно!');
        break;
    default:
        console.log('Результат выглядит странновато. Честно.');
}

let arg = prompt("Введите число?");
switch (arg) {
    case '0':
    case '1':
        console.log('Один или ноль');
        break;
    case '2':
        console.log('Два');
        break;
    case 3:
        console.log('Никогда не выполнится!');
        break;
    default:
        console.log('Неизвестное значение');
}

function showMessage(from, text) {
    from = '*' + from + '*';
    console.log(from + ': ' + text);
}
let from = "Иван";
showMessage(from, "Привет");
console.log(from);

function showMessage(from, text = "текст не добавлен") {
    console.log(from + ": " + text);
}
showMessage("Иван");

function sum1(a, b) {
    return a + b;
}
let result = sum1(1, 2);
console.log(result);

function doNothing() { /* пусто */ }
console.log(doNothing() === undefined);

function doNothing1() {
    return;
}
console.log(doNothing1() === undefined);

function sayHi() {
    console.log("Привет");
}
let func = sayHi;
func();
sayHi();

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
function showOk() {
    console.log("Вы согласны.");
}
function showCancel() {
    console.log("Вы отменили выполнение.");
}
ask("Вы согласны?", showOk, showCancel);

let age1 = prompt("Сколько Вам лет?", 18);
let welcome;
if (age1 < 18) {
    welcome = function () {
        console.log("Привет!");
    };
} else {
    welcome = function () {
        console.log("Здравствуйте!");
    };
}
welcome();

let sum3 = (a6, b6) => a6 + b6;
console.log(sum3(1, 2));

let sayHello = () => console.log("Hello!");
sayHello();

let age2 = prompt("Сколько Вам лет?", 18);
let welcome2 = (age2 < 18) ?
    () => console.log('Привет') :
    () => console.log("Здравствуйте!");
welcome2();

let sum7 = (a7, b7) => {
    let result7 = a7 + b7;
    return result7; // при фигурных скобках для 
    // возврата значения нужно явно вызвать return
};
console.log(sum7(1, 2));