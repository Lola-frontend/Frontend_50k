"use strict";


// -------------------------Homework 35-------------------

function getPersonInfo(name, surname, info) {
    console.log(name);
    console.log(surname);
    console.log(info.slice(0, 4));
}


let PerInfo = ["bred", "pit", ["option1", "option2", "option3", "option4", "option5"]];


getPersonInfo(...PerInfo);