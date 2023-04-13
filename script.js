// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне
// лише числових елементів даного масиву.

let arr = [20, 'one', 'two', true, 4, 48, 'string', 1, 'value', 1];

function Average(arr) {
    let count = 0;
    let sum = 0;
    for (let i = 0 ; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }else {
            continue;
        }
    }
    let avr = sum / count;
    console.log(`The average of array is ${avr}`);
}

Average(arr);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії,
// вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    if (znak === '+') {
        return x + y;
    }else if (znak === '-') {
        return x - y;
    }else if (znak === '*') {
        return x * y;
    }else if (znak === '/') {
        return x / y;
    }else if (znak === '%') {
        return x % y;
    }else if (znak === '^') {
        return Math.pow(x, y);
    }else {
        return "Something went wrong";
    }
}

let firstNum = Number(prompt(`Enter first number: `));

let secondNum = Number(prompt(`Enter second number: `));

let znak = prompt(`Enter sign: `);

console.log(doMath(firstNum, znak, secondNum));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву
// і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

let externalLength = prompt(`Enter a length of external array: `);

while (isNaN(externalLength) || externalLength <= 0) {
    externalLength = prompt(`Enter a length of external array: `);
}

let internalLength = prompt(`Enter a length of internal array: `);

while (isNaN(internalLength) || internalLength <= 0) {
    internalLength = prompt(`Enter a length of internal array: `);
}

function fillArray(exLength, inLength) {
    let arr = '';
    let value;
    for (let i = 0; i < exLength; i++) {
        for (let j = 0; j < inLength; j++) {
            value = prompt(`Enter a value for ${i + 1} ${j + 1} position of array`);
            arr += value + " ";
        }
        arr += "\n";
    }
    console.log(arr);
}

fillArray(externalLength, internalLength);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let str = prompt('Enter your string: ');
let symb = [];

let length = prompt(`How many symbols do you want to delete?`);

while (isNaN(length) || length < 1) {
    length = prompt(`How many symbols do you want to delete?`);
}

for (let i = 0; i < length; i++) {
    let char = prompt(`Enter ${i+1} symbol`);
    symb.push(char);
}


function delSymb(str, symb) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let check = false;
        for (let j = 0; j < symb.length; j++) {
            if (str[i] === symb[j]) {
                check = true;
                break;
            }
        }
        if (!check) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(delSymb(str, symb));