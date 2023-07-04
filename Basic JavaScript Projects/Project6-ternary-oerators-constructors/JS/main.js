//using  a terary operation with inpt from the browser
function rideFunction() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//my own constructor function with keywords new and this
function Furniture(Type, Style, Colour, Material) {
    this.Furniture_Type = Type;
    this.Furniture_Style = Style;
    this.Furniture_Colour = Colour;
    this.Furniture_Material = Material;
}
var Jack = new Furniture("Chair", "Armchair", "Grey", "Leather and Wood");
var Emily = new Furniture("Sofa", "Tuxedo", "Navy and Gold", "Velvet and Wood");
var Erik = new Furniture("Coffee table", "2 piece round", "Walnut and Black", "Steel and Wood");
//displays the results of the constructor function
function newFunction() {
    document.getElementById("New").innerHTML = "Emily owns a " + Emily.Furniture_Colour + 
    " " + Emily.Furniture_Style + " " + Emily.Furniture_Type + " made from " + Emily.Furniture_Material + ".";
}
//a nested function
function nestFunction() {
    document.getElementById("Nest").innerHTML = Count();
    function Count() {
        var Starting = 10;
        function Plus_One() {Starting +=1;}
        Plus_One();
        return Starting;
    }
}