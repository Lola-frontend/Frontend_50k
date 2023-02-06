"use strict";

// Добавление товара в корзину

let class_name = document.getElementsByClassName("add_cart");

// console.log(class_name);

let myFunction = function (evt) {
    evt.preventDefault();

    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
    let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
    let image = this.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");

    // console.log(price);

    let creat_li = document.createElement('li');
    creat_li.classList.add("bag__item");

    creat_li.innerHTML = '<div class="bag__img">\
                                    <a href="?search=#">\
                                        <img src="' + image[0].src + '" alt="">\
                                    </a>\
                                </div>\
                                <div class="bag__info">\
                                    <p class="info__title"><a href="?search=#">' + title[0].innerText + '</a></p>\
                                    <div class="info__price">\
                                    <span class="currency">$</span>\
                                    <span class="oprice">' + price[0].innerText + '</span>\
                                    </div>\
                                    <div class="trash">\
                                        <a href="?search=#"><i class="far fa-trash-alt"></i></a>\
                                    </div>\
                                </div>';

    let block_cart = document.querySelector('.bag.shopcard__dropdown ul');
    block_cart.appendChild(creat_li);

    alert("Товар успешно добавлен в корзину!");


    delete_product(); // вызов функции удаления товара из корзины

    total_price(); // вызов функции суммирования товаров в корзине при добавлении товара 

    // showQuantity(); // вызов функции посчета количества товаров в корзине при добавлении товара 
    count_product();

};


for (var i = 0; i < class_name.length; i++) {
    class_name[i].addEventListener('click', myFunction, false);

}


// Функция удаления товаров из корзины

function delete_product() {
    let click_trash = document.querySelectorAll(".trash");

    for (var i = 0; i < click_trash.length; i++) {
        click_trash[i].addEventListener('click', del_func, false);
    }

    function del_func(evt) {
        evt.preventDefault();

        this.parentNode.parentNode.remove();

        total_price(); // вызов функции суммирования товаров в корзине после удаления товара 
        // showQuantity(); // вызов функции посчета количества товаров в корзине после удаления товара 
        count_product();
    }
}


// Функция подсчета суммы товаров в корзине

function total_price() {
    let count_price = document.querySelectorAll(".info__price .oprice");

    let total_price = 0;

    for (var i = 0; i < count_price.length; i++) {
        total_price = total_price + (+count_price[i].textContent);
    }

    document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
    document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$ ${total_price}`;
}


// Функция подсчета количества товаров в корзине

// function showQuantity() {
//     let getPrice = document.querySelectorAll(".info__price .oprice");
//     let quantity = getPrice.length;

//     document.querySelector('.cart_count').innerHTML = `0 ${quantity}`;
// }

function count_product() {
    let count_product = document.getElementsByClassName("bag__item").length;
    document.getElementsByClassName('cart_count')[0].innerHTML = count_product;
    document.querySelectorAll('.shopcard__total span')[1].innerHTML = count_product;

}


// insert_listing

const tabs = {
    list_tabs: [
        "Лидеры продаж",
        "Новинки",
        "Распродажа"
    ]
};


let create_ul = document.createElement("ul");

tabs.list_tabs.forEach((item, i) => {
    create_ul.innerHTML += `<li>${item}</li>`;
});


// console.log(create_ul);

document.querySelector(".insert_listing").innerHTML += create_ul.outerHTML;