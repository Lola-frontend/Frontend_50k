"use strict";


// -------------------------Homework 42-------------------

// Сверстайте меню которое состоит из 5 менюшек 
// Получите все кнопки из меню
// При нажатие на меню, удалите именно тот элемент на которой нажали 


let getClick1 = document.getElementById("click1");
let getClick2 = document.getElementById("click2");
let getClick3 = document.getElementById("click3");
let getClick4 = document.getElementById("click4");
let getClick5 = document.getElementById("click5");

let removeMenu = (e) => {
    e.target.remove();
};

getClick1.addEventListener('click', removeMenu);
getClick2.addEventListener('click', removeMenu);
getClick3.addEventListener('click', removeMenu);
getClick4.addEventListener('click', removeMenu);
getClick5.addEventListener('click', removeMenu);