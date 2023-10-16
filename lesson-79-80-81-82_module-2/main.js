// ===================================================
// Урок 79. Условия
// ===================================================


// let userAge = 34;

// if (userAge >= 18) {
//     console.log('Вы совершеннолетний!')
// } else {
//     console.log('Вам еще нет 18')
// }

// userAge >= 18 ? console.log('Вы совершеннолетний!') : console.log('Вам еще нет 18')


// ===================================================
// Урок 80. Циклы
// ===================================================


// for (let i = 2; i <= 12; i++) {
//     console.log(i);
// }


// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// let i = 1;
// while (i <= 11) {
//     i = i + 1
//     console.log(i);
// }


// let i = 11;
// while (i >= 2) {
//     i = i - 1
//     console.log(i);
// }


// ===================================================
// Урок 81. Объектные типы данных. Массивы
// ===================================================


// const numbers = [3, 6, 8, 9, 12, 13, 15, 20, 23, 7, 4, 1];

// for( let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i]);
//     }
// }


// const rainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

// for(let i = rainbow.length; i >= 0; i--) {
//     console.log(rainbow[i]);
// }


// ===================================================
// Урок 82. Функции
// ===================================================


// function greeting (name) {
//     return `Hello, ${name}!`;
// }

// console.log(greeting('Alex'));

// ==================================================

// const numbers = [5, 11, 19, 8, 43, 1, 22, 6];

// function greeting (array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 10) {
//             console.log(array[i]);
//         }
//     }
// }

// greeting (numbers);

// ===================================================

// function calc (firstNumber, secondNumber, operator) {
//     if (operator === 'minus') {
//         return firstNumber - secondNumber;
//     } else if (operator === 'plus') {
//         return firstNumber + secondNumber;
//     } else if (operator === 'multiply') {
//         return firstNumber * secondNumber;
//     } else if (operator === 'divide') {
//         return firstNumber / secondNumber;
//     } else {
//         return 'Error';
//     }
    
// }

// let result = calc(2, 3, 'minus');
// console.log(result);


// ===================================================
// Урок 82. Объекты
// ===================================================

// const user = {
//     name: 'Daria',
//     age: 34,
//     speciality: 'frontend developer',
//     city: 'Yaroslavl',
//     sayHello(name) {
//         console.log(`Hello, ${name}!`);
//     }
// }
// user.sayHello('Daria');


// const users = [
//     {
//         name: 'Kate',
//         age: 29,
//         isAdmin: true
//     },
//     {
//         name: 'Alex',
//         age: 20,
//         isAdmin: false
//     },
//     {
//         name: 'John',
//         age: 35,
//         isAdmin: false
//     },
//     {
//         name: 'Steve',
//         age: 21,
//         isAdmin: true
//     },
//     {
//         name: 'Mary',
//         age: 25,
//         isAdmin: false
//     }
// ]

// let notAdmins = 0;

// for(let i = 0; i < users.length; i++) {
//     if (users[i].isAdmin == false) {
//         notAdmins = notAdmins + 1;
//     }
// }
// console.log(notAdmins);

