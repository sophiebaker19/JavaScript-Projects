//COUNTDOWN
// function with input from the user
function countdown() {
    var seconds = document.getElementById("seconds").value;
    //performs the countdown
    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        }
        else {
            alert("Time's Up!")
        }
    }
    tick();
}
//SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

//next/previous button
function plusOne(n) {   
    showSlides(slideIndex += n);
}

//image controls
function select(n) {   
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}