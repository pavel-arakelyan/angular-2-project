import {Animal} from "../model/animal";

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

class Snake extends Animal {
    constructor(name?: string) { super(name); }
  
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
  
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }

    run<T>(distanceInMeters:T){
        console.log(`Horse specific run ${distanceInMeters}m`);
    }
}


let snake = {} as Snake;
snake.name = Animal.DEFAULT_NAME;
snake.move = function (distanceInMeters) {
    console.log("Anonymous function -> " + distanceInMeters);
};
let horse = new Horse("Horse the Palomino");

snake.move(1022);
horse.run<number>(55);

let array = [] as Array<number>;
let _array = Array([3,3,3,9]);
array.push(1,5,8);

console.log(array.reduce((acc, e) => {
        acc += e;
        return acc;
    },0) + "--------" + _array);

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

// const user = { firstName: "Kit", lastName: "Kat" };

const user = new Student("Johnny", "M.", "D");

const enum Fruits{
    APPLE = 1,
    ORANGE = 5
}

document.body.innerHTML = greeter(user);