"use strict";

// -------------------------Homework 33------------------------------

//--------------------------------------------------------------

// Сделать callback функцию которая просит ввести логин и пароль, и проверяет правильно ли введены данные пользователя 

//--------------------------------------------------------------

function CheckLogin() {
    let login = prompt('Введите логин');
    if (login === 'Admin') {
        let password = prompt('Введите пароль');
        if (password === 'Master') {
            alert('Welcome, Admin');
        } else if (password === '' || password === null) {
            alert("Операция отменена");
        } else {
            alert('Не верный пароль');
        }
    } else if (login === '' || login === null) {
        alert('Операция отменена');
    } else {
        alert('Нет такого пользователя');
    }

}

CheckLogin();

// -------------------------------------------------------------------

// Сделать callback функцию которая создаёт html элемент, то есть функция просит какой тег создать, просит какой текст ввести и цвет текста. 

function createTag(tag, text, color) {
    var element = document.createElement(tag);
    element.innerText = text;
    element.style.color = color;
    return element;
}

var newTag = createTag(prompt('Введите тег'), prompt('Введите текст'), prompt('Введите цвет'));

document.body.appendChild(newTag);