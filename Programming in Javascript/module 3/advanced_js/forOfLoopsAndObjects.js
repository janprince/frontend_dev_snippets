const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car)
sportsCar.speed = "fast"
console.log("The sportsCar Object: ", sportsCar)


console.log("\n--------- for-in is unreliable --------")
for (prop in sportsCar) {
    console.log(prop)
}

console.log("🤔", "Iterating over Object and It's prototype!")


// for-of iterates over the object's own props i.e speed

console.log("\n-------- for-of is reliable ----------")
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop])
}

console.log("🎯", "Iterating over Object's OWN PROPERTIES only!")