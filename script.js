// Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне 
// лише числових елементів даного масиву.

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, 
// вказаної в змінній znak.Обидва числа і знак виходять від користувача.

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву 
// і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// let arr = [20, 'one', 'two', true, 4, 48, 'string', 1, 'value', 1];

// function Average(arr) {
//     let count = 0;
//     let sum = 0;
//     for (let i = 0 ; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i];
//             count++;
//         }else {
//             continue;
//         }
//     }
//     let avr = sum / count;
//     console.log(`The average of array is ${avr}`);
// }

// Average(arr);



// function doMath(x, znak, y) {
//     if (znak === '+') {
//         return x + y;
//     }else if (znak === '-') {
//         return x - y;
//     }else if (znak === '*') {
//         return x * y;
//     }else if (znak === '/') {
//         return x / y;
//     }else if (znak === '%') {
//         return x % y;
//     }else if (znak === '^') {
//         return Math.pow(x, y);
//     }else {
//         return "Something went wrong";
//     }
// }


// let firstNum = prompt(`Enter first number: `);

// while (isNaN(firstNum)) {
//     firstNum = prompt(`Enter first number: `);
// }

// let secondNum = prompt(`Enter second number: `);

// while (isNaN(secondNum)) {
//     secondNum = prompt(`Enter second number: `);
// }

// let znak = prompt(`Enter sign: `);

// console.log(doMath(firstNum, znak, secondNum));



// let externalLength = prompt(`Enter a length of external array: `);

// while (isNaN(externalLength) || externalLength <= 0) {
//     externalLength = prompt(`Enter a length of external array: `);
// }

// let internalLength = prompt(`Enter a length of internal array: `);

// while (isNaN(internalLength) || internalLength <= 0) {
//     internalLength = prompt(`Enter a length of internal array: `);
// }

// function fillArray(exLength, inLength) {
//     let arr = '';
//     let value;
//     for (let i = 0; i < exLength; i++) {
//         for (let j = 0; j < inLength; j++) {
//             value = prompt(`Enter a value for ${i + 1} ${j + 1} position of array`);
//             arr += value + " ";
//         }
//         arr += "\n";
//     }
//     console.log(arr);
// }

// fillArray(externalLength, internalLength);



// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let str = 'hello world';
let symb = 'l';

function del(str, symb) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === symb) {
            continue;
        }else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}

del(str, symb);

// let symbStr = symb.join('');
// console.log(symb, symbStr);
// let emp = str.replaceAll(symbStr, '');
// console.log(emp);