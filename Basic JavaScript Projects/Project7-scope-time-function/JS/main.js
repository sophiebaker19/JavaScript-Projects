//Global and local variables, one intentionally written wrong
var X = 10;
function Add_1() {
    document.write(X + 5 + "<br>");
}
function Add_2() {
    var X = 7
    console.log(Y + 6);
}
Add_1();
Add_2();
//If statements
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Hello").innerHTML = "How are you today?";
    }
}
function get_Time() {
    if (new Date().getHours() > 12) {
        document.getElementById("Time").innerHTML = "Good Afternoon!"
    }
}
//If/Else Statements
function Drive() {
    Age = document.getElementById("age").value;
    if (Age >= 17) {
        Learn = "You are old enough to drive";
    }
    else {
        Learn = "You are not old enough to drive yet";
    }
    document.getElementById("confirm").innerHTML = Learn;
}
