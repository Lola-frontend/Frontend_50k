// "use strict";


// -------------------------Homework 42-------------------
// Сделать объект, который запрашивает имя пользователя, год рождения, место рождения, с этим объектом должны создаваться все пользователи;
// Данные о пользователе вывести на страницу 

// input 
// let amantur= new createUser();

// output: 
// Amantur, 1998, Bishkek.

// input 
// let adilet = new createUser();

// output: 
// Adilet, 1995, Tokmok.



function createUser(name, year, city) {
    this.name = name;
    this.year = year;
    this.city = city;
    this.self = function () {
        console.log(`${this.name}, ${this.year}, ${this.city}`);
    };
}

let amantur = new createUser("Amantur", 1998, "Bishkek");

let adilet = new createUser("Adilet", 1995, "Tokmok");

amantur.self();
adilet.self();