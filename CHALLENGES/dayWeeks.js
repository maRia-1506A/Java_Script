function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = 365 * yearsRemaining;
    var weeks = yearsRemaining * 52;
    var month = 12 * yearsRemaining;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + month + " months left.");
}
lifeInWeeks(56);



