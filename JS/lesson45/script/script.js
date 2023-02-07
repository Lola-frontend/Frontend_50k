(function () {
    'use strict';

    class ploshad {

        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        calcPloshad() {
            return this.width * this.height;
        }

        calcPloshad2() {
            return this.width + this.height;
        }
    }

    const res_area = new ploshad(10, 20);
    const res_area2 = new ploshad(50, 50);

    console.log(res_area.calcPloshad());
    console.log(res_area2.calcPloshad2());

    class ploshadText extends ploshad {
        // extends связка двух классов

        constructor(width, height, text, value) {
            super(width, height);

            this.text = text;
            this.value = value;
        }

        showText() {
            console.log(`Text: ${this.text} | Value: ${this.value}`);
        }
    }

    const block = new ploshadText(20, 20, "Kate", "Тема урока Class");
    block.showText();
    console.log(block.calcPloshad());
});