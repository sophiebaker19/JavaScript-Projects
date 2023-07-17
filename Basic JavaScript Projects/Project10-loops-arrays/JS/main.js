//while loop that states while x is less than 11, list numbers 1-10
function Call_Loop() {
    var num = "";
    var X = 0;
    while (X < 11){
        num += "<br> The number is " + X;
        X++;
    }
    document.getElementById("loop").innerHTML = num;
}
//length property returns the length of a string
function length() {
    var text = "This is a string!";
    var line = text.length;
    document.getElementById("chall").innerHTML = line;
}
//for loop which lists a shopping list
var list = ["Apples", "Bread", "Milk", "Pasta"];
var content = "";
var Z;
function for_Loop() {
    for (Z = 0; Z < list.length; Z++) {
    content += list[Z] + "<br>";
    }
    document.getElementById("list").innerHTML = content;
}
//function using an array 
function array() {
    var sunglasses = [];
    sunglasses[0] = "gold circle rims and black lenses";
    sunglasses[1] = "black square rims and black lenses";
    sunglasses[2] = "sliver circle rims and silver lenses";
    sunglasses[3] = "black rectangular rims and blue lenses";
    document.getElementById("Array").innerHTML = "These sunglasses have " + 
        sunglasses[0] + ".";
}
//using the const keyword in an array changing the values and adding properties
function constant() {
    const cushions = [];
    cushions[0] = "yellow square"
    cushions[1] = "blue and red square"
    cushions[2] = "grey and silver sequin square"
    cushions[3] = "black and white diamond patterned"
    cushions[4] = "green and white rectangle"
    document.getElementById("constant").innerHTML = "This is a " +
    cushions[0] + " cushion. This is also a " + cushions[4] + " cushion."
}
//using the let keyword 
function key(){
    let X = 89;
    document.getElementById("key").innerHTML = X;
}
//using the return statement
function state() {
    return Math.PI;
}
document.getElementById("pi").innerHTML = state();
//creating an object using the let keyword
let flower = {
    type: "sunflowers",
    colours: "yellow and brown",
    season: "summer",
    description : function() {
        return "These flowers are " + this.type + " which are "
        + this.colours + " and are in season in the " + this.season + ".";
    }
};
document.getElementById("flowers").innerHTML = flower.description();
//a breaking statement is used to jump out of or end a loop
function BreakFunc() {
    let text = "";
 for (let i = 0; i < 10; i++) {
    if (i === 3) {break; }
    text += "The number is " + i + "<br>";
 }
 document.getElementById("b").innerHTML = text;
}
// a continue function breaks an iteration if a condition occurs
function ContinFunc() {
    let text = "";
    for (let i = 0; i < 5; i++) {
        if (i === 2) {continue; }
        text += "The number is " + i + "<br>";
    }
document.getElementById("c").innerHTML = text
}

