'use strict';

// // ООП  - понятие
// // Применение

// // как понять что есть строка


// let str = "текст";
// let strObj = new String(str);

// console.log(typeof (str));
// console.log((strObj));

// let car = {
//     kuzov: " Железо",
//     kolesa: "4 колеса",
//     modal: function () {
//         console.log("Hello");
//     }
// };

// // let mb = {
// //     marka: "Мерс",
// //     god: "2021"
// // };

// let mb = Object.create(car);


// // mb.__proto__ = car;

// // Object.setPrototypeOf(mb, car);

// console.log(mb.modal);

// mb.modal();




// сумма цен

// var sumPrice = document.querySelectorAll(".new_price");

// // console.log(sumPrice[1].innerText);

// let sum = 0;
// for (var i = 0; i < sumPrice.length; i++) {
//     sum += Number(sumPrice[i].innerText);


// }

// console.log(sum);

// сумма цен index_new

// function delete_product() {
//     let click_trash = document.querySelectorAll(".trash");

//     for (var i = 0; i < click_trash.length; i++) {
//         click_trash[i].addEventListener('click', del_func, false);


//     }

//     function del_func(evt) {
//         evt.preventDefault();

//         this.parentNode.parentNode.remove();
//     }
// }

// _______________________


var sumPrice = document.querySelectorAll(".price");

let sum = 0;
for (var i = 0; i < sumPrice.length; i++) {
    sum += parseFloat(sumPrice[i].innerText);

}

console.log(sum);

document.getElementById("summa").innerHTML = sum;
// summa.innerHTML = sum;






// var sumPrice = document.querySelectorAll(".info__price span");

// let sum = 0;
// for (var i = 0; i < sumPrice.length; i++) {
//     sum += parseFloat(sumPrice[i].innerText);

// }

// // document.querySelectorAll('shopcard__total span').innerHTML = sum;
// console.log(sum);

// при нажатии выходит цена

// var getPrice = document.getElementsByClassName("get_price");

// var getPriceFunction = function () {
//     var attributePrice = this.parentNode.parentNode.previousElementSibling.querySelectorAll(".new_price");
//     console.log(attributePrice[0].innerText);
// };

// for (var gp = 0; gp < getPrice.length; gp++) {
//     getPrice[gp].addEventListener('click', getPriceFunction, false);
// }