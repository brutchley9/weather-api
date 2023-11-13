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

        
        //var todaysDate = document.createElement('h4');
        //var today = dayjs();
        //todaysDate.textContent = $('h4').text(today.format('MMM D, YYYY'));
        //mainEl.append(todaysDate);

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


//everything above this line is for current days weather stats. Everything below is for the five-day forecast

        var lat = JSON.parse(data.coord.lat);
        var lon = JSON.parse(data.coord.lon);

        fetch(requestURLFiveDays + "?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey)
        .then(function (response) {
           return response.json();
        })

        .then(function (data) {

            dayOneEl.innerHTML = "";
            dayTwoEl.innerHTML = "";
            dayThreeEl.innerHTML = "";
            dayFourEl.innerHTML = "";
            dayFiveEl.innerHTML = "";
            console.log(data);

//declaring kelvin and celsius variables "globally" within this function to avoid confusion

            var kelvin = 273.15;
            var celsius = 32;

            //today's conditions below

            var day1Temp = document.createElement('p');
            day1Temp.textContent = Math.round(([(data.list[0].main.temp) - kelvin] * [9 / 5]) + celsius) + "° Fahrenheit";
            dayOneEl.append(day1Temp);

            var day1Humidity = document.createElement('p');
            day1Humidity.textContent = [data.list[0].main.humidity] + "% Humidity";
            dayOneEl.append(day1Humidity);

            var day1WindSpeed = document.createElement('p');
            day1WindSpeed.textContent = [data.list[0].wind.speed] + " mph windspeed";
            dayOneEl.append(day1WindSpeed);

            //day 2 weather below

            var day2Temp = document.createElement('p');
            day2Temp.textContent = Math.round(([(data.list[1].main.temp) - kelvin] * [9 / 5]) + celsius) + "° Fahrenheit";
            dayTwoEl.append(day2Temp);

            var day2Humidity = document.createElement('p');
            day2Humidity.textContent = [data.list[1].main.humidity] + "% Humidity";
            dayTwoEl.append(day2Humidity);

            var day2WindSpeed = document.createElement('p');
            day2WindSpeed.textContent = [data.list[1].wind.speed] + " mph windspeed";
            dayTwoEl.append(day2WindSpeed);

            //day 3

            var day3Temp = document.createElement('p');
            day3Temp.textContent = Math.round(([(data.list[2].main.temp) - kelvin] * [9 / 5]) + celsius) + "° Fahrenheit";
            dayThreeEl.append(day3Temp);

            var day3Humidity = document.createElement('p');
            day3Humidity.textContent = [data.list[2].main.humidity] + "% Humidity";
            dayThreeEl.append(day3Humidity);

            var day3WindSpeed = document.createElement('p');
            day3WindSpeed.textContent = [data.list[2].wind.speed] + " mph windspeed";
            dayThreeEl.append(day3WindSpeed);

            //day 4

            var day4Temp = document.createElement('p');
            day4Temp.textContent = Math.round(([(data.list[3].main.temp) - kelvin] * [9 / 5]) + celsius) + "° Fahrenheit";
            dayFourEl.append(day4Temp);

            var day4Humidity = document.createElement('p');
            day4Humidity.textContent = [data.list[3].main.humidity] + "% Humidity";
            dayFourEl.append(day4Humidity);

            var day4WindSpeed = document.createElement('p');
            day4WindSpeed.textContent = [data.list[3].wind.speed] + " mph windspeed";
            dayFourEl.append(day4WindSpeed);

            //day 5

            var day5Temp = document.createElement('p');
            day5Temp.textContent = Math.round(([(data.list[4].main.temp) - kelvin] * [9 / 5]) + celsius) + "° Fahrenheit";
            dayFiveEl.append(day5Temp);

            var day5Humidity = document.createElement('p');
            day5Humidity.textContent = [data.list[4].main.humidity] + "% Humidity";
            dayFiveEl.append(day5Humidity);

            var day5WindSpeed = document.createElement('p');
            day5WindSpeed.textContent = [data.list[4].wind.speed] + " mph windspeed";
            dayFiveEl.append(day5WindSpeed);


        })








    })

    




    //remember to call previousSearch() function here when it is figured out

});


var input = document.getElementById("city-weather");

//trying to add "press enter" to activate button

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("weather-button").click();
  }
}); 