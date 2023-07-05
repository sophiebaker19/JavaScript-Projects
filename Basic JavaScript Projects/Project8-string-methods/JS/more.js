//using the .toUpperCase() method to display hello in capital letters
function Upper() {
    var text = "hello!"
    var display = text.toUpperCase();
    document.getElementById("upper").innerHTML = display;
}
//using the search method to return the position of a word in a string
function Search() {
    var line = "The flower is yellow"
    var position = line.search("yellow");
    document.getElementById("search").innerHTML  = position;
}
//using the toFixed() method to return a number as a srting and to specified decimal places 
function whole() {
    var X = 56.37892
    var W = X.toFixed()
    document.getElementById("fix").innerHTML = W;
}
//using the valueOf() method to return the primitive value of a string
function value() {
    var Y = "Hello World!"
    var Z = Y.valueOf();
    document.getElementById("prim").innerHTML = Z;
}