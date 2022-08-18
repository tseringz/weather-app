import { format, startOfToday } from 'date-fns';

const temp = document.querySelector('.temperature');
const date = document.querySelector('.degree > h6');
const country = document.querySelector('.place > h2');
const place = document.querySelector('.place > h6');
const weatherStatus = document.querySelector('.weather-status > h6');
const feelsLike = document.querySelector('.weather-details > div:nth-child(1) > h5 > span');
const humidity = document.querySelector('.weather-details > div:nth-child(3) > h5 > span');
const windSpeed = document.querySelector('.weather-details > div:nth-child(2) > h5 > span');
const weatherImg = document.querySelector('img');
date.textContent = format(startOfToday(), 'PPP');

let weatherUrl = (city) => `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=38a9b80676d2854b1f7e81bf63d6e1f6`;
// get an input value 
async function getWeather(city) {
    try {
        let currentWeather  = await fetch(weatherUrl(city), {mode: 'cors'});
        let result = await currentWeather.json();
        temp.textContent = kToC(result.main.temp);
        country.textContent = result.sys.country;
        place.textContent = result.name;
        weatherStatus.textContent = result.weather[0].description.charAt(0).toUpperCase() + result.weather[0].description.slice(1);
        feelsLike.textContent = kToC(result.main.feels_like);
        humidity.textContent = result.main.humidity;
        windSpeed.textContent = meterToKilo(result.wind.speed);
        weatherImg.src = iconGenerator(result.weather[0].description);
        console.log(result);
    } catch(error) {
        throw new Error("check your internet connection or enter a correct location");
    }

    }
    
    function kToC(K) {
        return Math.round(K - 273.15);
    }

    function kToF(K) {
        return Math.round(K - 459.67);
    }

    function meterToKilo(K) {
        return Math.round(K * 3);
    }

    function iconGenerator(weather) {
        if(weather === "clear sky")
        {
           return  '../src/assets/icons8-sun-100.png';
        } else if(weather === "few clouds")
        {
           return  '../src/assets/icons8-partly-cloudy-day-100.png';
        } else if(weather === "scattered clouds")
        {
           return  '../src/assets/icons8-clouds-100.png';
        } else if(weather === "shower rain")
        {
           return  '../src/assets/icons8-heavy-rain-100.png';
        }  else if(weather === "rain")
        {
           return  '../src/assets/icons8-rain-cloud-100-2.png';
        } else if(weather === "thunderstorm")
        {
           return  '../src/assets/icons8-stormy-weather-100.png';
        }  else if(weather === "snow")
        {
           return  '../src/assets/icons8-winder-100.png';
        } else {
            return '../src/assets/icons8-windy-weather-100.png';
        }

    }
    export default getWeather;


