// constructor function
function HouseKeeper (name, yearsOfExperience, CleaningArea) {
    this.name= name;
    this.yearsOfExperience= yearsOfExperience;
    this.CleaningArea= CleaningArea;
    this.clean= function() {
        alert("Cleaning in progress...");
    }
}

var houseKeeper1= new HouseKeeper("Aziz", 10, ["Bedroom", "Washroom", "Kitchen"]);
var houseKeeper2= new HouseKeeper("Efath", 5, ["Bedroom", "Washroom", "Kitchen"]);

houseKeeper1.clean();

console.log(houseKeeper1.name);
console.log(houseKeeper2.yearsOfExperience);
