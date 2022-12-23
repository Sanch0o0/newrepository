export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('search', this.searchWeather.bind(this));
        view.on('show', this.showWeather.bind(this));
    }

    init() {
        if (this.model.weatherData !== null) {
            this.model.firstDate = true;

            const { allDays, weatherByDay } = JSON.parse(localStorage.data);

            this.view.renderDayWeather(allDays, weatherByDay);
        }
    }

    async searchWeather(city) {

        this.model.firstDate = true;
        await this.model.search(city);

        const { allDays, weatherByDay } = JSON.parse(localStorage.data);

        this.view.renderDayWeather(allDays, weatherByDay);
    }

    showWeather(id) {
        this.model.show(id);


    }

}