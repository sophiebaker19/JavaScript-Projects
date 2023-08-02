// keeps track of whose turn it is
let activePlayer = 'X'; 
//Array that stores an array of moves. used to determine win conditions.
let selectedSquares = [];
//places X or O in square
function placeXorO(squareNumber) {
    //Condition ensures a square hasn't been selected already.
    //the .some()method used check element of selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //variable retrieves HTML element id clicked
        let select = document.getElementById(squareNumber);
        //checks whose turn it is
        if (activePlayer === 'X') {
            //if active player is = to X, the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //active player may only be X  or O so, if not X it must be O
        } else {
            //if active player is = to O, the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and active player are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //calls function to check for any win conditions.
        checkWinConditons();
        //condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is X, change it to O.
            activePlayer = 'O';
            //if active player is anything other than X
        } else {
            //change active to X
            activePlayer = 'X';
        }

        //function plays placement sound
        audio('../media/place.mp3');
        //condition checks to see if it is the computers turn
        if (activePlayer === 'O') {
            //function disables clicking for computers turn.
            disableClick();
            //function waits 1 sec before the computer places image and enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for our computerTurn() func. to work.
        return true;
    }
    //function results in a random square being selected by the computer
    function computersTurn() {
        //boolean needed for while loop
        let success = false;
        //variable stores random number 0-8 
        let pickASquare;
        //condition allows while loop to keep trying if a square is selected already
        while (!success) {
            //random number 0-8 selected
            pickASquare = String(Math.floor(Math.random() *9));
            // if random number number evaluated returns true, the square hasnt been selected yet.
            if (placeXorO(pickASquare)) {
                //line calls the function
                placeXorO(pickASquare);
                //changes the boolean logic and ends the loop
                success = true;
            };
        }   
    } 
}
//function parses selectedSquares aray to search for win conditions
//drawline() function is called to draw a line on screen if the condition is met.
function checkWinConditons() {
    // X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //condition checks for a tie, if none above are met and
    // nine squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //plays the tie game sound
        Audio('../media/tie.mp3');
        //function sets .3sec timer before resetgame is called
        setTimeout(function () { resetGame(); }, 500);
    }

    //function checks if array contains 3 strings
    //checks for each condition win
    function arrayIncludes(squareA, squareB, squareC) {
        //used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all included in our array
        //true is returned and our else if condition executes the drawLine() function
        if (a === true && b === true && c === true) { return true; }
    }
}
//funtion resets the game in the vent of tie or win.
function resetGame() {
    //for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //variables gets HTML element i
        let square = document.getElementById(String(i));
        //removes elements background image
        square.style.backgroundImage = '';
    }
    //selects array so it is empty and can start over
    selectedSquares = [];
}
//takes string parameter of the path set for
//placement sound
function audio(audiourl) {
    //new audio object and pass the path as the parameter
    let audio = new Audio(audiourl);
    //play method plays audio sound
    audio.play();
}
//utilises HTML canvas to draw lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //access HTML canvas
    const canvas = document.getElementById("win-lines");
    //gives us access to methods and properties
    const c = canvas.getContext('2d');
    //indicates where start of x axis is
    let x1 = coordX1,
        //where start of lines y axis
        y1 = coordY1,
        //end of x axis
        x2 = coordX2,
        //end of end of lines x axis is
        y2 = coordY2,
        //variabel stores temp x axis data update in animation loop
        x = x1,
        //variable stores temp y axis data
        y = y1;

    //function interacts with canvas
    function animateLineDrawing() {
        //variable creates loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //method clears conetnt from last loop
        c.clearRect(0, 0, 608, 608);
        //method starts new path
        c.beginPath();
        //moves to starting point in our line
        c.moveTo(x1, y1);
        //indicatse the end point in line
        c.lineTo(x, y);
        //sets the width od the line
        c.lineWidth = 10;
        //sets colour of line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draw everything laid out above
        c.stroke();
        //condition checks if end pint is reached
        if (x1 <= x2 && y1 <= y2) {
            //adds 10 t the previous end x endpoint
            if (x < x2) { x += 10; }
            // adds 10 to the previous end y point
            if (y < y2) { y += 10; }
            //condition is similar to the one above
            // necessary for the 6, 4, 2 win
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //condition is similar to the one above
        // necessary for the 6, 4, 2 win
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    // function clears canvas after win line is drawn
    function clear() {
        //starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears the canvas
        c.clearRect(0, 0, 608,608);
        // line stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    // disallows clicking while the win sound plays
    disableClick();
    //line plays the win sounds
    audio('../media/winGame.mp3');
    //calls main animation loop
    animateLineDrawing();
    //waits 1 sec, then clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}
//makes body element temporarily unclickable
function disableClick() {
    //makes body unclickable
    body.style.pointerEvents = 'none';
    //makes body clickable again after 1 sec
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}