// (function () {
// 'use strict';

// function get_this(a, b) {
//     // console.log(this);

//     function arif() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(arif());
// }
// get_this(10, 3);


// this - это возможность вызова объекта и всего содержимого что находится внутри объекта
// использование this внутри функции также будет обращаться к window
// если мы включим 'use strict' , то this выдаст сообщение undefined 

// const obj = {
//     name: "Kate",
//     age: 28,
//     sum: function () {
//         console.log(this);
//         // доступен

//         function test() {
//             console.log(this);
//             // не доступен
//         }
//         test();
//     }

// };

// obj.sum();

// при использовании this внутри метода объекта obj у this есть возможность использовать рядом стоящие данные
// если внутри одного метода создать функцию и внутри него использовать this то она обратится к глобальному окну window

// function User(name, age) {
//     this.name = name,
//         this.age = age,
//         this.data_ = function () {
//             console.log("Hello" + this.name);
//         };
// }

// let kate = new User("Kate", 28);
// kate.data_();

// this может быть использован внутри функции, которая создает объекты и this получит значения
// контекст у методов объекта - сам объект
// this в конструкторах и классах - это новый экземпляр объекта
// Ручная привязка this : call, apply, bind

// }());



// function hello(age) {
//     console.log(this);
//     console.log(this.name);
//     console.log(age);
// }

// const newObj = {
//     name: "Kate",
// };

// hello.call(newObj, 26, 5);
// hello.apply(newObj, ['26']);


// function count(num) {
//     return this + num;
// }

// const mnojitel = count.bind(5);

// console.log(mnojitel(10));


const click = document.querySelector("#btn1");

click.addEventListener('click', function () {
    // this. style.background = "blue";
    this.remove();
});