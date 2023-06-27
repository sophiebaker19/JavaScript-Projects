function First_function() { //calls the function 
    var message = "HI!";    //variable that displays a message
    document.getElementById("para").innerHTML = message; //tells the computer to display the variable in place of the paragraph
    var goback = "Go Back"; // variable that display a message on the button
    document.getElementById("button").innerHTML = goback; //tells the computer to diplay the variable on the button
}

function Second_function() { //calls the function
    var heading = "I "; //first line of the concatenated message
    heading += "am a Heading";//second line of concatenated message
    document.getElementById("Heading").innerHTML = heading; //displays the concatenated message in place of the heading 
}