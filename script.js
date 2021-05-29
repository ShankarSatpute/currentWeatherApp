console.log("This is current wheather app");
// API_KEY = 2a8db2a3cddadc6bb2cb5aac405f0402

const API_KEY = "2a8db2a3cddadc6bb2cb5aac405f0402"
const URL = "https://api.openweathermap.org/data/2.5/weather"
const India = "pakistan" 

// selectors
const inputVal = document.getElementById("inputId");
const infoBody = document.querySelector(".weather-body")
// events
inputVal.addEventListener("keypress", (event) =>{
    if(event.keyCode == "13"){
        getWeatherInfo(inputVal.value);
        infoBody.style.display = 'block';
        inputVal.value = "";
    }
})

// functions

function getWeatherInfo(city){
    fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(weather =>{
        return weather.json();
    })
    .then(showReport);
}

function showReport(weather){
    console.log(weather)
    let city = document.getElementById("city")
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById("temp");
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    
    let weatherType = document.getElementById("weather");
    weatherType.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = setDate(todayDate);

    if(weatherType.textContent.toLowerCase() == 'clear'){
        document.body.style.backgroundImage = "url('./images/clearImage.jpg')";
    }
    else if(weatherType.textContent.toLowerCase() == 'clouds'){
        document.body.style.backgroundImage = "url('./images/cloudImage.jpg')"
    }
    else if(weatherType.textContent.toLowerCase() == 'fog'){
        document.body.style.backgroundImage.toLowerCase() = "url('./images/fogImage.jpg')"
    }
    else if(weatherType.textContent.toLowerCase() == 'rain'){
        document.body.style.backgroundImage = "url('./images/rainImage.jpg')"
    }
    else if(weatherType.textContent.toLowerCase() == 'raze'){
        document.body.style.backgroundImage = "url('./images/razeImage.jpg')"
    }
    else if(weatherType.textContent.toLowerCase() == 'snow'){
        document.body.style.backgroundImage = "url('./images/snowImage.jpg')"
    }
    else if(weatherType.textContent.toLowerCase() == 'storm'){
        document.body.style.backgroundImage = "url('./images/stormImage.jpg')"
    }
    else if(weatherType.textContent.toLowerCase() == 'wind'){
        document.body.style.backgroundImage = "url('./images/windImage.jpg')"
    }
}

function setDate(dateArgs){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "Saptembar", "October", "November", "December"];

    let year = dateArgs.getFullYear();
    let month = months[dateArgs.getMonth()];
    let dDate = dateArgs.getDate();
    let day = days[dateArgs.getDay()];
    return `${dDate} ${month} (${day}) , ${year}`;
}