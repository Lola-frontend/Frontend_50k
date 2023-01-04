"use strict";

// 2) По клику на кнопку добавить в корзину товар с след параметрами:
    // 1) Картинка
    // 2) Заголовок
    // 3) Доп параметры - цвет
    // 4) Цена
// 3) Добавить в корзину

// Конкретные задачи:
    // 1) Получить картинку
    // 2) Получить заголовок
        // Решение:
            // let ttl = document.getElementsByClassName("ttl");
            // ttl[1].innerText

    // 3) Получить доп параметры - цвет
    // 4) Получить цену

    // Принцип получения данных следующий:
        // Получить данные можно с помощью:
        // .class - document.getElementsByClassName(name)
        // #id - document.getElementById(id)
        // attribute - document.getElementById(id).attribute = new value
        // tag - document.getElementsByTagName(name)

        // .class - document.getElementsByClassName - Внутри документа получить элементы по названию класса
        //      document - вкладка 
        //      (.) - связка
        //      get - получить
        //      Elements - Элементы (потому что классов бывает несколько)
        //      By - по / от
        //      ClassName - название класса


    // let ttl = document.getElementsByClassName("ttl");
    // ttl[1].innerText

        // Результат: ничего не вывелось
    // Без команды вывода ничего не выведется!

//     let ttl = document.getElementsByClassName("ttl");
//     console.log(ttl[1].innerText);



//     let NewPrice = document.getElementsByClassName("new_price");
//     console.log(`Цена ${NewPrice[0].innerHTML}`);

//     let Description = document.getElementsByClassName("description");
//     console.log(`Описание: ${Description[0].innerHTML}` );

//    let ItemImg = document.getElementsByClassName("item_image");
//    console.log(ItemImg[0]);

//    var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//      alert( i + ": " + item + " (массив:" + arr + ")" );
// });

// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//   return number > 0;
// });

// alert( positiveArr ); // 1,2,3

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//   return name.length;
// });

// // получили массив с длинами
// alert( nameLengths ); // 4,3,10

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//   return number > 0;
// }

// alert( arr.every(isPositive) ); // false, не все положительные
// alert( arr.some(isPositive) ); // true, есть хоть одно положительное

// var arr = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(sum, current) {
//   return sum + current;
// }, 0);

// alert( result ); // 15

// let ttl = document.querySelectorAll(".body-product > .ttl");

// Вариант вывода №1
// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);

// for (let text of ttl){
//     console.log(text.innerText); 
// }


// // по клику получить название товара с помощью js

//     var elements = document.getElementsByClassName("add_cart");

//     var myFunction = function(){
//         var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
//         console.log(attribute[0].innerText);
//     };

//     for (var i=0; i<elements.length; i++){
//         elements[i].addEventListener('click', myFunction, false);
//     }
// // // -----------------------------
// // // по клику получить цену товара с помощью js

// var getPrice = document.getElementsByClassName("get_price");

// var getPriceFunction = function(){
//     var attributePrice = this.parentNode.parentNode.previousElementSibling.querySelectorAll(".new_price");
//     console.log(attributePrice[0].innerText);
// };

// for (var gp=0; gp<getPrice.length; gp++){
//     getPrice[gp].addEventListener('click', getPriceFunction, false);
// }

// // // -----------------------------------------------
// // // по клику получить адрес картинки с помощью js

// var getImage = document.getElementsByClassName("get_image");

// var getImageFunction = function(){
//     var attributeImage = this.parentNode.parentNode.parentNode.previousElementSibling.querySelectorAll(".item_image");
//     console.log(attributeImage[0].src);
// };

// for (var im=0; im<getImage.length; im++){
//     getImage[im].addEventListener('click', getImageFunction, false);
// }

// // попробуйте с помощью js поменять название товара и цену товара  

// let Description = document.querySelectorAll(".body-product > .ttl");
// for(var d=0; d<Description.length; d++){
//     Description[d].innerHTML = "Leopard Sweatshirt";
// }


// let NewPrice = document.getElementsByClassName("new_price");
// for(var p=0; p<NewPrice.length; p++){
//     NewPrice[p].innerHTML = "$20";
// }

// const arr = {
//     name: "Alex",
//     age: 25,
//     param: {
//         color: "white",
//         nat: "KG"
//     }
// };

// for (let key in arr){
//     if(typeof(arr[key]) === 'object'){
//         for (let key2 in arr[key]){
//             console.log(arr[key][key2]);
//         }
//     } else{
//         console.log(arr[key]);
//     }
// } 



// Сделать функцию которая вычисляет длину окружности, радиус задает пользователь.

// function circle(radius){
//     let p = 3.14;
//     let circle;
//     circle = 2 * p * radius;
//     alert(circle);
// }

// circle(prompt('введите радиус' ));


// // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b

// function min(a, b){
//     if(a>b){
//         alert(b);
//     }else if (a<b){
//         alert(a);
//     }else{
//         alert("равны");
//     }
// }

// min(prompt('введите a' ), prompt('введите b' ));


// что такое function

// function NameFun(number){
//     let num = number;
//     console.log(num);
// }
// NameFun(100);


// Сделайте функцию которая возводить в степень числа вводимые пользователем

// function degree(number, degree){
//     let result = number ** degree;
//     alert(result);
// }

// degree(prompt('Введите число'), prompt('Введите степень числа'));


// Сделайте функцию которая находит площадь круга, радиус вводить пользователь. 

// function circle(radius){
//     let p = 3.14;
//     let circle;
//     circle = 2 * p * radius;
//     alert(circle);
// }

// circle(prompt('введите радиус' ));

// function circle(radius){
//     let p = 3.14;
//     return 2 * p * radius;
// }

// let result = circle(prompt('введите радиус' ));
// alert(result);

// //  Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь

// function rectangle(a, b){
//     let result = a * b;
//     alert(result);
// }

// rectangle(prompt('Введите длину'), prompt('Введите ширину'));


// function rectangle(a, b){
//     return a * b;
// }

// let result = rectangle(prompt('Введите длину'), prompt('Введите ширину'));
// alert(result);