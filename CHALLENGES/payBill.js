function whosPaying(names) {
    const name= ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var random= Math.floor(Math.random(name.length)*name.length);

    return name[random]+" is going to buy lunch today!";
}

whosPaying();