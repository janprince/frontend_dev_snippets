const car = {
    engine: true,
}

const sportsCar = Object.create(car)    // car is a prototype to sportsCar
sportsCar.speed = "fast"
console.log("The sportsCar Object: ", sportsCar)


for (prop in sportsCar) {
    console.log("🤔", prop)
}

for (prop of Object.keys(sportsCar)) {
    console.log("🎯", prop + ": " + sportsCar[prop])
}
