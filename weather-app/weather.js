const apiKey = "8fa0b72d64cc4f94921c0bd338750ef8";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    document.querySelector('.country').innerHTML = data.sys.country;
    
    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png'
    } else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png'
    } else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png'
    } else if(data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'images/drizzle.png'
    } else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);

});

searchBox.addEventListener('keypress', (event) => {
    // Check if the pressed key is 'Enter' (key code 13)
    if (event.keyCode === 13 || event.which === 13) {
        // Trigger the search action
        checkWeather(searchBox.value);
    }

  

});



