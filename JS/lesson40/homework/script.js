"use strict";


// -------------------------Homework 38-------------------

// написать функцию которая запрашивает пользователя ввести число, функция должна проверять, что ввел пользователь 
// строку или тип число, при этом не конвертируя данные, который ввел пользователь. Если пользователь ввел тип число
//  то преобразуйте это в шестнадцатеричный код, восьмеричный и двоичный код, если это не строка то на консоли
//   выводится что это не строка.


// input: 13
// output: d, 15, 1101


function number(n) {
    if (isFinite(n)) {
        console.log(n.toString(16), n.toString(8), n.toString(2));
    } else {
        console.log("не строка");
    }
}

number(13);