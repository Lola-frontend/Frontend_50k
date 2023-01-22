"use strict";


// -------------------------Homework 36-------------------

let salary = {
    almaz: 1200,
    adilet: 1300,
    nursultan: 3000,
};

let bonus = {
    almaz: 400,
    adilet: 300,
    nursultan: 200,
    // __proto__: salary
};

Object.setPrototypeOf(bonus, salary);


for (let total in bonus) {
    let result = salary[total] + bonus[total];
    console.log(`${total}: ${result}`);
}