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


// по клику получить название товара с помощью js

    var elements = document.getElementsByClassName("add_cart");

    var myFunction = function(){
        var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
        console.log(attribute[0].innerText);
    };

    for (var i=0; i<elements.length; i++){
        elements[i].addEventListener('click', myFunction, false);
    }
// // -----------------------------
// // по клику получить цену товара с помощью js

var getPrice = document.getElementsByClassName("get_price");

var getPriceFunction = function(){
    var attributePrice = this.parentNode.parentNode.previousElementSibling.querySelectorAll(".new_price");
    console.log(attributePrice[0].innerText);
};

for (var gp=0; gp<getPrice.length; gp++){
    getPrice[gp].addEventListener('click', getPriceFunction, false);
}

// // -----------------------------------------------
// // по клику получить адрес картинки с помощью js

var getImage = document.getElementsByClassName("get_image");

var getImageFunction = function(){
    var attributeImage = this.parentNode.parentNode.parentNode.previousElementSibling.querySelectorAll(".item_image");
    console.log(attributeImage[0].src);
};

for (var im=0; im<getImage.length; im++){
    getImage[im].addEventListener('click', getImageFunction, false);
}

// попробуйте с помощью js поменять название товара и цену товара  

let Description = document.querySelectorAll(".body-product > .ttl");
for(var d=0; d<Description.length; d++){
    Description[d].innerHTML = "Leopard Sweatshirt";
}


let NewPrice = document.getElementsByClassName("new_price");
for(var p=0; p<NewPrice.length; p++){
    NewPrice[p].innerHTML = "$20";
}
