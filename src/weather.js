
async function getWeather() {
    let currentWeather  = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=38a9b80676d2854b1f7e81bf63d6e1f6', {mode: 'cors'});
    let result = await currentWeather.json();
    console.log(result);
}

getWeather();

