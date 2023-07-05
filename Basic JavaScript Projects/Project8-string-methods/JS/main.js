//concatenating parts together to form a sentence.
function full() {
    var fir = "Hello "
    var sec = "World!,"
    var thi = " How "
    var fou = "are "
    var fif = "you? "
    var whole = fir.concat(sec, thi, fou, fif );
    document.getElementById("con").innerHTML = whole;
}
//using the slice method to extract a part from the sentance.
function sent() {
    var line = "The penny will drop"
    var part = line.slice(4, 9);
    document.getElementById("slice").innerHTML = part;
}
//using toString() to return a number as a srting
function num() {
    var X = 45
    document.getElementById("return").innerHTML = X.toString();
}
//using toPrecision() to round a number to a specific length
function precision() {
    var Y = 46729.68285732819
    document.getElementById("round").innerHTML = Y.toPrecision(7);
}