"use strict";
    // использование строгого режима для обработки данных

    let number = 1;
                    // данные без кавычек = числа
    let text= "text";
                    // данные с кабычками = строки|string 

    console.log(10*"hello");  //NaN - неправильное использование синтаксиса
    console.log(number+text);
    console.log(`Привет, ${text}!`);
    console.log(typeof(number));
                        // текст +цифра = склеивание
                        // + склеивание и сложение
                        // Выражение внутри ${…} вычисляется, и его результат становится частью строки.
                        // Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

// true 
// false

let number2 = false;
console.log(number2);

// console.log(unknown); // unknown is not defined = не определенно


// создание объекта начинается с фигурных скобок


let obj = {
    name: "Alex",
    // name это название первого объекта
    // : разделени емежду объектом и его значением
    //  "" внутри кавычек указывается значение объекта
    // конец строки заканчивается на ,
    age: 26,
    location: "Bishkek",

    // в конце строки перед закрывающей фигурной скобкой запятая(,) не указывается
};

console.log("Name: " +obj.name + " Age: " + obj.age);

// Первый вариант получения данных из объекта
// console.log - команда вывода данных на экран
// obj - переменная
// name - название объекта


// console.log(obj["name"]);

// Второй вариант получения данных из объекта
// console.log - команда вывода данных на экран

// obj - переменная
// name - название объекта
// [] - указание позиции и уточнения объекта
// "" нужны для определения объекта

// Массивы
// массив создается с помощью []
// для получения значения необходимо использовать порядковый номер

//          0           1       2
let arr = ["apple", "phone", "pen"];

// console.log(arr.apple); // undefined - не определенно
console.log(arr[0]);

console.log(5/-0);


// Базовые функции / Взаимодействие с пользователем

console.log("Сообщение");

// alert("Hello!"); // модальное окно - системное - дизайн изменить нельзя

// let age = prompt('Сколько тебе лет?', 100);
// prompt - состоит из 2х частей. Prompt - запоминает введенные данные для дальнейшей обработки. 
// 1 часть - вопрос (title)
// 2 часть ответ по умолчанию [default]

// alert(`Тебе ${age} лет!`);

// let result = prompt('Сколько будет 2+2', '');
// var msg;
// if (result == '4') {
//     msg = 'Верно'
// } else {
//     msg = "Не верно"
// }

// alert(msg);

var result = confirm("Результат сложения 2+2 равен 4?");

alert(result);