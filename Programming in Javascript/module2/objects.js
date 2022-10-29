// object: collections of related properties


var storeManager = {movement: 4, socialSkills: 50, streetSmarts: 50, Health: 30}
storeManager.nextAchievement = "get promoted"

console.log(storeManager)

storeManager.movement ++;
console.log(storeManager.movement) // 5


// alternative syntax to the dot notation

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}
console.log(house2["rooms"]);