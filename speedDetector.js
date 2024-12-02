//Let declare a function speed and set the required speed limit.

function speedIndicator() {
//Lets give the user to enter the speed of the car.
const speed = prompt("Please input the speed of the car:");
//Now lets setup the required speed for a all cars for every range of 5km
const limit = 70;

const kmPerPoint = 5;

if (. <= limit) {

console.log("Ok");
//We have to setup another speed limit if the car exceed the required speed
} else {

const points = Math.floor((speed - limit) / kmPerPoint);

if (points > 12) {

//If it exceed we suspend the drivers license 
console.log("Driver's License is suspended");
    } 
else {

//but if not reached we award the driver points
console.log(`Points: ${points}`);
}
}
    }
//Now lets print the output of the speed entered by user

speedIndicator();