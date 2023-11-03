var APIKey = "3d313856df69e730b9c4fe7a917b495a";
var city = document.getElementById("city-weather");
var requestURL = "https://api.openweathermap.org/data/2.5/weather?q="
var storedCity = localStorage.getItem("city-name", city.value);
var mainEl = document.getElementById("today-weather-report");
var previousEl = document.getElementById("previous-search");


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











//below function gets item from local storage and loads weather information from previous search within "previous search" element when called


function populatePrevious() {
    var storedCity = localStorage.getItem("city-name");
    fetch(requestURL + storedCity + "&appid=" + APIKey)
    .then(function (response) {
        return response.json();
    })
    
    

    .then(function (data) {
        console.log(data);

        previousEl.innerHTML = "";

        var cityName = document.createElement('p');
        cityName.textContent = data.name;
        previousEl.append(cityName);

        var temp = document.createElement('p');
        var kelvin = 273.15
        temp.textContent = Math.round([(data.main.temp) -= kelvin]) + "° Celsius";
        previousEl.append(temp);

        var humidity = document.createElement('p');
        humidity.textContent = [data.main.humidity] + "% Humidity";
        previousEl.append(humidity);

        var windSpeed = document.createElement('p');
        windSpeed.textContent = [data.wind.speed] + " mph";
        previousEl.append(windSpeed);
    })

}

populatePrevious();
//below function starts when search button is clicked, logging "it works!" in console to verify functionality, establishes form value as the city to be searched, and saves value in local storage

document.getElementById("weather-button").addEventListener("click", function() {

    populatePrevious();

    localStorage.setItem("city-name", city.value);

    fetch(requestURL + city.value + "&appid=" + APIKey)
    .then(function (response) {
        return response.json();
    })

//this then statement selects the specific weather object and creates a new 'p' element within main with that data
    .then(function (data) {

        mainEl.innerHTML = "";

        console.log(data);
        var cityName = document.createElement('p');
        cityName.textContent = data.name;
        mainEl.append(cityName);

        var temp = document.createElement('p');
        var kelvin = 273.15
        temp.textContent = Math.round([(data.main.temp) -= kelvin]) + "° Celsius";
        mainEl.append(temp);

        var humidity = document.createElement('p');
        humidity.textContent = [data.main.humidity] + "% Humidity";
        mainEl.append(humidity);

        var windSpeed = document.createElement('p');
        windSpeed.textContent = [data.wind.speed] + " mph windspeed";
        mainEl.append(windSpeed);
    })
    //remember to call previousSearch() function here when it is figured out
});