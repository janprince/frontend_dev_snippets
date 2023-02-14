class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true} // The getSelf() method prints out the properties on the object instance it is called on
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}


/**
 * 
 * It is possible to implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. 
 * 
 *  This makes the Train class a base class, or the super-class of the HighSpeedTrain class. Put differently, the HighSpeedTrain class becomes the sub-class of the Train class, because it inherits from it.
 * 
 */

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }

    // In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }

    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }

}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);