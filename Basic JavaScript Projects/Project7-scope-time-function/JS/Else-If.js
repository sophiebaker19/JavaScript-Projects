//THis is an else/if statement which displays the time of day
function time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time").innerHTML = Reply;
}