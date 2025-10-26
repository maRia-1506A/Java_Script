var bottleNumb= 99;

while(bottleNumb>=1) {
    console.log(bottleNumb+" bottles of beer on the wall, "+bottleNumb+" bottles of beer.");
    bottleNumb--;
    if(bottleNumb===0) {
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
       
    } else {
        console.log("Take one down and pass it around, "+bottleNumb+ " bottles of beer on the wall.");
    } 
}
console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");