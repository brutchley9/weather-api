var APIKey = "3d313856df69e730b9c4fe7a917b495a";
var city = document.getElementById("city-weather");
var requestURL = "https://api.openweathermap.org/data/2.5/weather?q="
var storedCity = localStorage.getItem("city-name", city.value);
var mainEl = document.getElementById("today-weather-report")


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
    localStorage.setItem("city-name", city.value);

    fetch(requestURL + city.value + "&appid=" + APIKey)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
        for (let {name} of data) {
            var cityName = document.createElement('p');
            name.innerHTML = name;
            mainEl.append(cityName);
        }
    })
    //remember to call previousSearch() function here when it is figured out
});