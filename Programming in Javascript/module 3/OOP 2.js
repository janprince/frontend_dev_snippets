// classes

class Car {
    constructor(color, speed) {
        // properties
        this.color = color;
        this.speed = speed;
    }

    turboOn(){
        console.log("turbo is on!")
    }
}

let c1 = new Car("blue", 43);

c1.turboOn();