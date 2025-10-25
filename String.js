let name= prompt("Whats your name?");
let fname= name.slice(0,1);
let capital_fname=fname.toUpperCase();

let lname= name.slice(1,name.length);
lname= lname.toLowerCase();
let totalName= capital_fname+lname;
alert("Hello "+totalName);