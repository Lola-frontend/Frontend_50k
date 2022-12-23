"use strict";

// Сделайте скрипт который запрашивает у пользователя ввести ИМЯ и ФАМИЛИЯ, вы должны получить эти данные и вывести это на консоли

let FirstName = prompt("Ваше имя", "Alex");
let LastName = prompt("Ваша Фамилия", "Bold");

console.log(FirstName, LastName);



let FirstNumber = +prompt("Первое число", 10);
let SecondNumber = +prompt("Второе число", 10);

// Сделайте скрипт который запрашивает ввести два числа и вывести сумму этих двух чисел
let sum = FirstNumber + SecondNumber;

// Сделайте скрипт который запрашивает ввести два числа и вывести умножение этих чисел?
let result = FirstNumber * SecondNumber;

console.log(`Cумма ${sum}`);
console.log(`Умножение ${result}`);

confirm(`Cумма чисел ${FirstNumber} + ${SecondNumber} = ${sum}`);
confirm(`Произведение чисел ${FirstNumber} * ${SecondNumber} = ${result}`);

