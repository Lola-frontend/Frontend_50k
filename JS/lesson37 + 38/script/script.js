'use strict';

// ООП  - понятие
// Применение

// как понять что есть строка


let str = "текст";
let strObj = new String(str);

console.log(typeof (str));
console.log((strObj));

let car = {
    kuzov: " Железо",
    kolesa: "4 колеса",
    modal: function () {
        console.log("Hello");
    }
};

// let mb = {
//     marka: "Мерс",
//     god: "2021"
// };

let mb = Object.create(car);


// mb.__proto__ = car;

// Object.setPrototypeOf(mb, car);

console.log(mb.modal);

mb.modal();