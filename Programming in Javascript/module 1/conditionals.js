var result = 50;

if (result > 40) {
    console.log("congratulations, you've passsed")
}
else {
    console.log("duh.")
}



var place = "first"

if (place == "first"){
    console.log("Gold");
} else if (place == "second") {
    console.log("silver")
} else {
    console.log("No medal")
}

place = "third"
// switch statement
switch(place) {
    case 'first':
        console.log("Gold");
        break;
    case 'second':
        console.log("Silver");
        break;
    default:
        console.log("No medal");
        break;
}




var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary')
} else if (age < 18) {
   console.log('You get an allowance')
}


// day of the week 
var day = `Sunday`;
switch(day) {
   case 'Monday':
       console.log('Read a book');
       break;
   case 'Tuesday':
       console.log('Watch a movie');
       break;
   case 'Wednesday':
       console.log('Read a book');
       break;
   case 'Thursday':
       console.log('Play basketball');
       break;
   case 'Friday':
       console.log('Socialize');
       break;
   case 'Saturday':
       console.log('Chill');
       break;
   case 'Sunday':
       console.log('Have barbecue');
       break;
   default:
       console.log('There is no such day');
}

