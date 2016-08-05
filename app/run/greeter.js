"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var animal_1 = require("../model/animal");
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(animal_1.Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    Horse.prototype.run = function (distanceInMeters) {
        console.log("Horse specific run " + distanceInMeters + "m");
    };
    return Horse;
}(animal_1.Animal));
var snake = {};
snake.name = animal_1.Animal.DEFAULT_NAME;
snake.move = function (distanceInMeters) {
    console.log("Anonymous function -> " + distanceInMeters);
};
var horse = new Horse("Horse the Palomino");
snake.move(1022);
horse.run(55);
var array = [];
var _array = Array([3, 3, 3, 9]);
array.push(1, 5, 8);
console.log(array.reduce(function (acc, e) {
    acc += e;
    return acc;
}, 0) + "--------" + _array);
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// const user = { firstName: "Kit", lastName: "Kat" };
var user = new Student("Johnny", "M.", "D");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map