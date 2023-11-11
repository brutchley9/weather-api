var APIKey = "3d313856df69e730b9c4fe7a917b495a";
var city = document.getElementById("city-weather");
var requestURL = "https://api.openweathermap.org/data/2.5/weather?q="
var storedCity = localStorage.getItem("city-name", city.value);
var mainEl = document.getElementById("today-weather-report");
var previousEl = document.getElementById("previous-search");

var requestURLFiveDays = "https://api.openweathermap.org/data/2.5/forecast"



var forecastEl = document.getElementById("five-day-forecast");
var dayOneEl = document.getElementById("day-one");
var dayTwoEl = document.getElementById("day-two");
var dayThreeEl = document.getElementById("day-three");
var dayFourEl = document.getElementById("day-four");
var dayFiveEl = document.getElementById("day-five");




//below function automatically sets "Lawrence" as a previous search within local storage. This fixed the error messages the console was receiving by populating the url with a city name upon first load

function onLoad() {
    localStorage.setItem("city-name", "Lawrence");
    console.log("First Load! Search a City!")
}

onLoad();


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
        var celsius = 32
        temp.textContent = Math.round(([(data.main.temp) - kelvin] * [9 / 5]) + celsius) + "° Fahrenheit";
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

//then statement selects the specific weather object and creates a new 'p' element within main with that data
    .then(function (data) {

        mainEl.innerHTML = "";

        console.log(data);
        var cityName = document.createElement('p');
        cityName.textContent = data.name;
        mainEl.append(cityName);

        var temp = document.createElement('p');
        var kelvin = 273.15
        var celsius = 32
        temp.textContent = Math.round(([(data.main.temp) - kelvin] * [9 / 5]) + celsius) + "° Fahrenheit";
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

document.getElementById("weather-button").addEventListener("click", function() {
    var lat = JSON.parse(data.object.coord.lat);
    var lon = JSON.parse(data.object.coord.lon);
    console.log(lat);
    console.log(lon);




    //fetch api variables / etc //
    fetch(requestURLFiveDays + "?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey)
    .then(function (response) {
        return response.json();
    })



    dayOneEl.innerHTML = "";
    dayTwoEl.innerHTML = "";
    dayThreeEl.innerHTML = "";
    dayFourEl.innerHTML = "";
    dayFiveEl.innerHTML = "";


});