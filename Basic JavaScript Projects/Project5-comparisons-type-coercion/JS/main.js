//using type of operator to give the data type
document.write(typeof "Word");
//using the coercion type 
document.write("10"+5);
//Not A Number value
function testFunction() {
    document.getElementById("Test").innerHTML = 0/0;
}
function trueFunction() {
    document.getElementById("True").innerHTML = isNaN('A word');
}
function falseFunction() {
    document.getElementById("False").innerHTML = isNaN('23');
}
//these display Infinity and -Infinity 
function infFunction() {
    document.getElementById("Inf").innerHTML = 2E310
}
function negFunction() {
    document.getElementById("NInf").innerHTML = -2E310
}
//these use Boolean Logic
function bootFunction() {
    document.getElementById("Boot").innerHTML = 5>2
}
function boofFunction() {
    document.getElementById("Boof").innerHTML = 5<2
}
//These use the console.log() method
console.log(2+2);
console.log(5<2);
//the double equals sign compares the two pieces of data 
function comtFunction() {
    document.getElementById("Comt").innerHTML = 5==5
}
function comfFunction() {
    document.getElementById("Comf").innerHTML = 5==4
}
//the triple equal sign compares the data on each side and their data types
function aFunction() {
    document.getElementById("a").innerHTML = 3===3
}
function bFunction() {
    document.getElementById("b").innerHTML = "B"===7
}
function cFunction() {
    document.getElementById("c").innerHTML = "Seven"===7
}
function dFunction() {
    document.getElementById("d").innerHTML = 4===9
}
//the logical operators
//the AND operator
function andFunction() {
    document.getElementById("Andt").innerHTML = 5>2 && 8>4
    document.getElementById("Andf").innerHTML = 5>2 && 8<4
}
//the OR operator
function orFunction() {
    document.getElementById("Ort").innerHTML = 5>2 || 8<4
    document.getElementById("Orf").innerHTML = 5<2 || 8<4
}
// the NOT operator
function notFunction() {
    document.getElementById("Nott").innerHTML = ! 2>1
    document.getElementById("Notf").innerHTML = ! 2<1

}