// functional programming (separate data)
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax){
    return shoes * tax
}

var toPay = totalPrice(shoes, stateTax);
console.log(toPay)



// Object oriented programming paradigm - using objects (Group data)
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("total Price: " + calculation);
    }
}

purchase1.totalPrice();


var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log("total Price: " + calculation);
    }
}

purchase2.totalPrice();


// refined
var purchase3 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log("total Price: " + calculation);
    }
}

purchase3.totalPrice();
