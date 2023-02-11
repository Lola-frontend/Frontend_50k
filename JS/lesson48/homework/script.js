// -------------------------Homework 48-------------------

// Создайте литеральный объект 
// Преобразуйте этот объект в строковые данные с помощью json 
// Полученные строковые данные обратно преобразуйте в объект  

'use strict';

const user = {
    name: "Kate",
    age: 25,
    iStudent: true,
    courses: ['html', 'css', 'js'],
    finished: null,

};

console.log(user);
console.log(JSON.stringify(user));
console.log((JSON.parse(JSON.stringify(user))));