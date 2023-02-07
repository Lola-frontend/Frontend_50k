// -------------------------Homework 45-------------------
// Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части
//  урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), 
//  year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести 
//  одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс 
//  студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.


'use strict';

class User {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        console.log(`${this.name} ${this.surname}`);
    }

}

const userKate = new User("Kate", "White");
userKate.getFullName();


class Student extends User {
    // extends связка двух классов

    constructor(name, surname, year1, year2) {
        super(name, surname);

        this.year1 = year1;
        this.year2 = year2;
    }

    getCourse() {
        return this.year2 - this.year1;
    }
}

const year = new Student("Mary", "Jane", 2020, 2023);

year.getFullName();
console.log(year.getCourse());