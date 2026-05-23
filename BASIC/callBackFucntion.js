function anotherAddEventListener(typeOfEvent, callBack) {
    var eventThatHappened= {
        eventType: "keypress",
        key:"p",
        durationOfKeypress: 2
    }

    if(eventThatHappened.eventType === typeOfEvent) {
        callBack(eventThatHappened);
    }
}


anotherAddEventListener("keypress", function(event) {
    console.log(event);
})