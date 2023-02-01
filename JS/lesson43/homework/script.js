"use strict";


// -------------------------Homework 42-------------------

// Сделать навигацию для смены цвета заднего фона 
// Навигация должна содержать три цвета 
// При нажатии на цвет в навигации задний цвет фона должен поменяться  

// вариант 1

let getcolor1 = document.querySelector(".red");

function red() {
    document.body.style.background = "red";
}
getcolor1.addEventListener('click', red);



let getcolor2 = document.querySelector(".yellow");

function yellow() {
    document.body.style.background = "yellow";
}
getcolor2.addEventListener('click', yellow);


let getcolor3 = document.querySelector(".green");

function green() {
    document.body.style.background = "green";
}
getcolor3.addEventListener('click', green);


let getcolor4 = document.querySelector(".none");

function none() {
    document.body.style.background = "none";
}
getcolor4.addEventListener('click', none);


// вариант 2, он с интернета, но мне  он понравился, более изящный и короткий

// function changeBodyBg(color) {
//     document.body.style.background = color;
// }