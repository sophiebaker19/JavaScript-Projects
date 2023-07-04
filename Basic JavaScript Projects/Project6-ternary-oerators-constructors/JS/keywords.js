function Vehicle(Make, Model, Year, Colour) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function carFunction() {
    document.getElementById("Key").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Colour + "-coloured " +
    Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}