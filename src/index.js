import generateJoke from './generateJoke';
import './styles/main.scss';
import getWeather from './weather';

getWeather('paris');

const formSubmit = document.querySelector('form');
const weatherInput = document.querySelector('input');

formSubmit.addEventListener('submit', function(e){
    e.preventDefault();
        const city = weatherInput.value;
        if(city) {
            getWeather(city);
        }        
});