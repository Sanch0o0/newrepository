import { EventEmitter } from "./helpers/EventEmitter.js";

export class View extends EventEmitter {
    constructor(dayWeatherBilder) {
        super();

        this.dayWeatherBilder = dayWeatherBilder;
        this.city = localStorage.getItem('city') || null;
        this.all = null;

        this.form = document.querySelector('.form');
        this.formInput = document.getElementById('search-input');
        this.weatherDayBox = document.querySelector('.weather-day-box');
        this.buttonDay = document.querySelector('.button-box');
        this.dailForecastBox = document.querySelector('.daily-forecast-box');

        this.formInput.addEventListener('focus', this.focusInput.bind(this))
        this.form.addEventListener('submit', this.searchWeatherByCity.bind(this));

    }

    focusInput() {
        console.log(11)
    }

    searchWeatherByCity(event) {
        event.preventDefault();

        this.city = this.formInput.value;
        this.formInput.value = '';
        localStorage.city = this.city;

        if (this.city.trim() === '') {
            return;
        }

        this.emit('search', this.city);
    }

    renderDayWeather(day, data) {
        let dayWeatherBox = null;
        let button = null;
        let dailyForecast = null;
        let dailyForecastItem = null;
        this.weatherDayBox.replaceChildren();
        this.buttonDay.replaceChildren();
        this.dailForecastBox.replaceChildren();

        for (let i = 0; i < day.length; i++) {
            dailyForecast = this.dayWeatherBilder.createForecastListItem(i, day[i]);
            data[day[i]].forEach(element => {
                dayWeatherBox = this.createWeatherBox(i, day[i], element);

                button = this.createButton(i, day[i], element)

                dailyForecastItem = this.createDailyForecast(i, day[i], element);

                dailyForecast.append(dailyForecastItem)
            });

            this.weatherDayBox.append(dayWeatherBox);
            this.buttonDay.append(button);
            this.dailForecastBox.append(dailyForecast);
        }
    }

    showDayWeather(event) {
        event.stopImmediatePropagation();

        let id = event.target.getAttribute('id');

        this.emit('show', id);
    }

    createWeatherBox(index, day, element) {
        console.log(element)
        const dtTxt = this.dayWeatherBilder.createCurrentDate(index, day, element);
        const cityItem = this.dayWeatherBilder.createSpanItem(day, this.city);
        const avarageTemp = this.dayWeatherBilder.createDayWeather(index, day, element);
        const commonDescription = this.dayWeatherBilder.createSpanItem(day, `Feels like ${element.main.feels_like} °C. ${element.weather[0].main}`);

        const pressure = this.dayWeatherBilder.createSpanItem(day, 'Pressure ' + element.main.pressure);
        const himidity = this.dayWeatherBilder.createSpanItem(day, 'Himidity ' + element.main.humidity + ' %');
        const visibility = this.dayWeatherBilder.createSpanItem(day, 'Visibility ' + element.visibility + ' km');
        const speed = this.dayWeatherBilder.createSpanItem(day, 'Speed ' + element.wind.speed + ' m/s');
        const commonBox = this.dayWeatherBilder.createCommonBox(index, day, [pressure, himidity, visibility, speed]);

        return this.dayWeatherBilder.createListItem(index, day, [dtTxt, cityItem, avarageTemp, commonDescription, commonBox]);
    }


    createButton(index, day, element) {
        const dayItem = this.dayWeatherBilder.createSpanItem(day, 'Dec ' + day);
        const minMaxTemp = this.dayWeatherBilder.createSpanItem(day, ` ${Math.round(element.main.temp_min)} / ${Math.round(element.main.temp_max)} °C`);
        const description = this.dayWeatherBilder.createSpanItem(day, ` ${element.weather[0].description}`);

        return this.dayWeatherBilder.createDayButton(index, day, [{ event: 'click', handler: this.showDayWeather.bind(this) }], [dayItem, minMaxTemp, description]);
    }

    createDailyForecast(index, day, element) {
        const description = this.dayWeatherBilder.createSpanItem(day, element.weather[0].description);
        const minTemp = this.dayWeatherBilder.createSpanItem(day, Math.round(element.main.temp_min) + ' °C');
        const dayHours = this.dayWeatherBilder.createSpanItem(day, new Date(element.dt_txt).getHours() || 24);

        return this.dayWeatherBilder.createForecastElement(index, day, [minTemp, description, dayHours])
    }
}