"use strict";

// сделать калькулятор с помощью базовых функций js, калькулятор должен суммировать, вычитать, умножать, делить, остаток от деления, возводить в степень. 

let FirstNumber = +prompt("Первое число", 10);
let SecondNumber = +prompt("Второе число", 10);

let sum = FirstNumber + SecondNumber;
let raznost = FirstNumber - SecondNumber;
let umnojenie = FirstNumber * SecondNumber;
let delenie = FirstNumber / SecondNumber;
let ostatok = FirstNumber % SecondNumber;
let stepen = FirstNumber ** SecondNumber; 

console.log(`Cумма: ${sum}`);
console.log(`Разность: ${raznost}`);
console.log(`Умножение: ${umnojenie}`);
console.log(`Деление: ${delenie}`);
console.log(`Остаток от деления: ${ostatok}`);
console.log(`Степень числа: ${stepen}`);

// alert(`Cумма чисел: ${FirstNumber} + ${SecondNumber} = ${sum}`);
// alert(`Разность чисел: ${FirstNumber} - ${SecondNumber} = ${raznost}`);
// alert(`Умножение чисел: ${FirstNumber} * ${SecondNumber} = ${umnojenie}`);
// alert(`Деление чисел: ${FirstNumber} / ${SecondNumber} = ${delenie}`);
// alert(`Остаток от деления: ${FirstNumber} % ${SecondNumber} = ${ostatok}`);
// alert(`Степень числа: ${FirstNumber} ** ${SecondNumber} = ${stepen}`);

// сделать скрипт на проверку на логин и пароль, если логин и пароль правильный то на консоли выводится сообщение “Welcome”, если пользователь неправильно ввел логин то на консоли выводиться сообщение “логин не правильный”, если пользователь ввел неправильно пароль то на консоли выводиться “пароль не правильный”.  

let login = prompt("login:", "");
let password = prompt("password:", "");

if (login == "login" && password=="password"){
    console.log('Welcome');
} else if (login != 'login'){
    console.log('Логин не правильный');
} else if (password != 'password'){
    console.log('Пароль не правильный');
} 


CheckLogin(prompt('Введите логин'), prompt('Введите логин') );