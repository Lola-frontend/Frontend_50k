"use strict";

// Добавление товара в корзину

let class_name = document.getElementsByClassName("add_cart");

// console.log(class_name);

let myFunction = function (evt) {
    evt.preventDefault();

    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
    var price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
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





    // Удаление товара
    delete_product();

};


for (var i = 0; i < class_name.length; i++) {
    class_name[i].addEventListener('click', myFunction, false);

}

function delete_product() {
    let click_trash = document.querySelectorAll(".trash");

    for (var i = 0; i < click_trash.length; i++) {
        click_trash[i].addEventListener('click', del_func, false);


    }

    function del_func(evt) {
        evt.preventDefault();

        this.parentNode.parentNode.remove();

    }


}


// сумма 