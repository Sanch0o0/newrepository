import { EventEmitter } from "./helpers/EventEmitter.js";
import { WeatherApi } from "./services/weather-api.js";

export class Model extends EventEmitter {
    constructor(weatherData) {
        super()

        this.weatherData = weatherData;
        this.firstDate;

    }

    async search(city) {

        let data = await WeatherApi.searhWeatherCity(city);

        localStorage.data = JSON.stringify(data);
    }

    show(id) {
        let dayBox = document.querySelector('.weather-day-box');
        let buttonBox = document.querySelector('.button-box');
        let forecastBox = document.querySelector('.daily-forecast-box');

        if (this.firstDate) {
            this.firstDate = false;
            [...dayBox.children][0].classList.remove('display');
            [...buttonBox.children][0].classList.remove('currentButton');
            [...forecastBox.children][0].classList.add('hidden');
            this.currentDayBox = document.querySelector(`#${id}`);
            this.currentButtonBox = buttonBox.querySelector(`#${id}`);
            this.currentForecastBox = forecastBox.querySelector(`#${id}`);
            this.currentDayBox.classList.add('display');
            this.currentButtonBox.classList.add('currentButton');
            this.currentForecastBox.classList.remove('hidden');
        } else {
            this.currentDayBox.classList.remove('display');
            this.currentButtonBox.classList.remove('currentButton');
            this.currentForecastBox.classList.add('hidden');
            this.currentDayBox = document.querySelector(`#${id}`);
            this.currentButtonBox = buttonBox.querySelector(`#${id}`);
            this.currentForecastBox = forecastBox.querySelector(`#${id}`);
            this.currentDayBox.classList.add('display');
            this.currentButtonBox.classList.add('currentButton');
            this.currentForecastBox.classList.remove('hidden');
        }
    }
}