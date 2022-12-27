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

    let ttl = document.getElementsByClassName("ttl");
    console.log(ttl[1].innerText);

    let NewPrice = document.getElementsByClassName("new_price");
    console.log(`Цена ${NewPrice[0].innerHTML}`);

    let Description = document.getElementsByClassName("description");
    console.log(`Описание: ${Description[0].innerHTML}` );

   let ItemImg = document.getElementsByClassName("item_image");
   console.log(ItemImg[0]);