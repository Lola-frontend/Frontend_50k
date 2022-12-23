"use strict";

// создайте объект person, этот объект должен содержать данные о человеке, например имя, фамилие, возраст, год рождение, место рождение и.т.д. 

let person= {
    name: "Kate",
    age: 22,
    year: 2000,
    city: "Bishkek",
    student: true,
    married: false,
    address: "Asanbay"
};

//сделайте перебор объекта и выведите на консоль

console.log(`Ваше имя: ${person.name}`);
console.log(`Возраст: ${person.age}`);
console.log(`Год рождения: ${person.year}`);
console.log(`Город проживания: ${person.city}`);
console.log(`Вы студент: ${person.student}`);
console.log(`Замужем: ${person.married}`);
console.log(`Адрес проживания: ${person.address}`);


// создайте массив, внутри массива запишите несколько данных 
let arr = ["computer", "mouse", "screen", "keyboard", "printer" ];

// сделайте перебор массива и выведите на консоли
console.log("My computer: "  + arr[0], arr[1], arr[2], arr[3], arr[4]);