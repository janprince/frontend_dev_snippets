// classes

class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn(){
        console.log("turbo is on!")
    }
}

let c1 = new Car("blue", 43);

c1.turboOn();