// -------------------------Homework 46-------------------

// Создать класс для динамического создания товаров
// Все данные о товаре должен ввести пользователь 


class Product {
    constructor(title, originPrice, oldPrice) {
        this.title = title;
        this.originPrice = originPrice;
        this.oldPrice = oldPrice;

    }
}

function addNewProduct() {
    let title = prompt("enter title");
    let originPrice = prompt("enter origin Price");
    let oldPrice = prompt("enter old Price");

    return new Product(title, originPrice, oldPrice);
}

console.log(addNewProduct());