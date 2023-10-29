var APIKey = "3d313856df69e730b9c4fe7a917b495a";
var city = document.getElementById("city-weather");
var storedCity = localStorage.getItem(city.value);


//this function is designed to take previous search value from search bar and save it as a new, created "p" tag within the article element

function previousSearch() {
    console.log((storedCity));
    var lastSearch = [];
    lastSearch.push($("#city-weather")).value;
    $.each(lastSearch), function(index, value) {
        const p = document.createElement("p");
        p.innerHTML = value;
        document.getElementById("previous-search").appendChild(p);
    }
}

//below function starts when search button is clicked, logging "it works!" in console to verify functionality, establishes form value as the city to be searched, and saves value in local storage

document.getElementById("weather-button").addEventListener("click", function() {
    console.log("Click! It works :)");
    localStorage.setItem("city-name", city.value);
    previousSearch();
});