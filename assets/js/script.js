var APIKey = "3d313856df69e730b9c4fe7a917b495a";





//below function starts when search button is clicked, logging "it works!" in console to verify functionality, establishes form value as the city to be searched, and saves value in local storage

document.getElementById("weather-button").addEventListener("click", function() {
    console.log("Click! It works :)")
    let city = document.getElementById("city-weather").value;
});