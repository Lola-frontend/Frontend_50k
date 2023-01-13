"use strict";


// ------------------------homework 34----------------------

// Преобразуйте псевдо массив  в массив
// дан псевдо массив  {0: 'first', 1: 'second', 2: 'third', length: 3}                
// вывод [ "first", "second", "third" ]

var object = {
    0: 'first',
    1: 'second',
    2: 'third',
    length: 3
};

var array = [];

for (var i = 0; i < object.length; i++) {
    array.push(object[i]);

}

console.log(array);


// дан массив ["first", "second", "third"]

// вывод [ "f", "i", "r", "s", "t" ], [ "s", "e", "c", "o", "n", "d" ] [ "t", "h", "i", "r", "d" ] 

// Решение 1

let arr = ["first", "second", "third"];

arr.forEach(function (item) {
    console.log(item.split(""));
});

// Решение 2

let arr1 = ["first", "second", "third"];

let result = arr1.map(function (elem) {
    return elem.split('');
});

console.log(result);