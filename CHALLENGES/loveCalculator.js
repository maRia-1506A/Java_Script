p1= prompt("Name of Person 1? ");
p2= prompt("Name of Person 2? ");

var score= Math.floor(Math.random()*100)+1;
if(score>70) {
    alert("The love between "+p1+" and "+p2+" is "+score+"%"+". Your are role model for everyone.");
} else if(score>30 && score<=70) {
    alert("The love between "+p1+" and "+p2+" is "+score+"%");    
} else {
    alert("The love between "+p1+" and "+p2+" is "+score+"%"+". You go together like oil and water.");   
}