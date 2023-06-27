function addFunction() {//calling the addition function
    var addition = 3 + 3;
    document.getElementById("Add").innerHTML = '3 + 3 = ' + addition;//result on html page
}
function subFunction() {//calling the suntration function
    var subtract = 6 - 4;
    document.getElementById("Sub").innerHTML = '6 - 4 = ' + subtract;//result on the html page
}
function mulFunction() {//callin the multiplication function
    var multiply = 5 * 2;
    document.getElementById("Mul").innerHTML = '5 x 2 = ' + multiply;// result on the html page

}
function divFunction() {//calling the division function
    var divide = 20 / 4;
    document.getElementById("Div").innerHTML = '20 / 4 = ' + divide;//result on the html page

}
function opFunction() {// calling a multiple operations function
    var multi = (10 + 7) - 3 / 2 * 7;
    document.getElementById("MulOp").innerHTML = 'Ten plus Seven, minus Three, divided by Two, times Seven = ' + multi;//result printed on screen

}
function modFunction() {// calling the modulus (remainder) function
    var modulus = 50 % 8;
    document.getElementById("Mod").innerHTML = 'The remainder of 50 divided by 8 is ' + modulus;//printed result on screen 

}
function negFunction() {//calls negation function
    var x = 9;
    document.getElementById("Neg").innerHTML = -x;//shows result on screen
}
function incFunction() {//calling increment function
    var y = 8;
    document.getElementById("Inc").innerHTML = y++//prints result on html page

}
function decFunction() {//calls decrement function
    var y = 3;
    document.getElementById("Dec").innerHTML = y--//prints result on screen
}
function chaFunction(){// calls our random umber and maths challenge function
    window.alert(Math.random() * 100);//prints random number in alert box
    document.getElementById("Chall").innerHTML = Math.sqrt(81);//shows our maths callenge result 
}


