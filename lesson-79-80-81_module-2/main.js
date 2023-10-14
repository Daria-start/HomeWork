// Урок 79. Условия


// let userAge = 34;

// if (userAge >= 18) {
//     console.log('Вы совершеннолетний!')
// } else {
//     console.log('Вам еще нет 18')
// }

// userAge >= 18 ? console.log('Вы совершеннолетний!') : console.log('Вам еще нет 18')


// Урок 80. Циклы


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


// Урок 81. Объектные типы данных. Массивы

const numbers = [3, 6, 8, 9, 12, 13, 15, 20, 23, 7, 4, 1];

for( let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}

const rainbow = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];


for(let i = rainbow.length; i >= 0; i--) {
    console.log(rainbow[i]);
}

