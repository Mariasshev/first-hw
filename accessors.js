var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    // метод для получения значения закрытого свойства
    Rectangle.prototype.getWidth = function () {
        return this._width;
    };
    // метод для установки значения закрытому свойству
    Rectangle.prototype.setWidth = function (value) {
        if (value <= 0) {
            this._width = 1;
        }
        else {
            this._width = value;
        }
    };
    Object.defineProperty(Rectangle.prototype, "height", {
        // accessors - механизм, который позволяет перехватить обращение к члену объекта на запись или чтение.
        // getter 
        get: function () {
            return this._height;
        },
        // setter
        set: function (value) {
            if (value <= 0) {
                this._height = 1;
            }
            else {
                this._height = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.calculateArea = function () {
        return this._width * this._height;
    };
    return Rectangle;
}());
var rect1 = new Rectangle();
rect1.setWidth(100); // установка ширины с помощью метода
rect1.height = (-20); // установка высоты с помощью setter. Запускается метод set на строке 28, значение 20 передается в качестве параметра
console.log(rect1.getWidth()); // чтение значение закрытого свойства с помощью метода
console.log(rect1.height); // чтение значение закрытого свойства с помощью аксесора. Тут вызывается метод get со строки 23
var rectArea = rect1.calculateArea();
console.log(rectArea);
