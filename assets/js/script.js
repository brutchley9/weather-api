var APIKey = "3d313856df69e730b9c4fe7a917b495a";
var city = document.getElementById("city-weather");
var storedCity = localStorage.getItem("city-name");


//you left off on this function below!!!!

function previousSearch() {
    console.log(storedCity.value)
    var lastSearch = []
    lastSearch.push($("#city-weather")).value;
    $.each(lastSearch), function(index, value) {
        
    }
}

//below function starts when search button is clicked, logging "it works!" in console to verify functionality, establishes form value as the city to be searched, and saves value in local storage

document.getElementById("weather-button").addEventListener("click", function() {
    console.log("Click! It works :)")
    localStorage.setItem("city-name", city.value);
    previousSearch()
});