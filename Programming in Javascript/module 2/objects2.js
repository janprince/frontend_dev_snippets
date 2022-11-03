//  design objects as combinations of data and functionality

// objects with its properties

var car = {};

car.mileage = 98765;
car.color = "red";

console.log(car);

car.turnKey = function () {                   // an anonymous function
    console.log("the engine is running");
}

car.lightsOn = function (){
    console.log("the lights are on");
}


// Ok, so now I have added four properties to my object. And two of those are methods. 

console.log(car);
car.turnKey();
car.lightsOn()