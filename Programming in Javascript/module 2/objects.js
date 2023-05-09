// object: collections of related properties
// JavaScript objects are containers for named values, called properties and methods.
// object is an unordered, noniterable collection of key:value pairs 
// in objects, keys can only be strings or symbols



var storeManager = {movement: 4, socialSkills: 50, streetSmarts: 50, Health: 30}  // JavaScript automatically converts keys to a string data type
storeManager.nextAchievement = "get promoted"

console.log(storeManager)

storeManager.movement ++;
console.log(storeManager.movement) // 5

// log the object keys
console.log(Object.keys(storeManager))  // an array of keys as strings



// alternative syntax to the dot notation
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2);       // {rooms: 4, color: 'pink', priceUSD: 12345}
console.log(house2["rooms"]);