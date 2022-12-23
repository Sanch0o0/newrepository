export class DayWeatherBoxHelper {
    createDayWeather(i, day, data) {
        return this.createElement({
            tag: 'div',
            classList: ['day-weather-data'],
            attributes: [{ prop: 'id', value: 'e' + day[i] }],
            textContent: data.main.temp + ' °C',
        })
    }

    createCurrentDate(i, day, data) {
        return this.createElement({
            tag: 'div',
            classList: ['day-weather-data'],
            attributes: [{ prop: 'id', value: 'e' + day[i] }],
            attributes: '',
            textContent: `Dec ${new Date(data.dt_txt).getDate()}, ${new Date().getHours()}:${new Date().getMinutes()}`,
        })
    }

    createDayButton(i, day, handlers, children) {
        return this.createElement({
            tag: 'button',
            classList: (i === 0) ? ['day-button', 'currentButton'] : ['day-button'],
            attributes: [{ prop: 'id', value: 'e' + day }],
            // textContent: 'Dec, ' + day,
            handlers,
            children,
            childrenAction: 'append',
        })
    }

    createSpanItem(id, textContent) {
        return this.createElement({
            tag: 'span',
            attributes: [{ prop: 'id', value: 'e' + id }],
            classList: ['min-max_temp'],
            textContent,
        });
    }

    createImgItem(img, id) {
        return this.createElement({
            tag: 'img',
            attributes: [{ prop: 'src', value: `${img}` }, { prop: 'id', value: 'e' + id }],
            classList: ['min-max_temp'],
        });
    }

    createCommonBox(i, day, children) {
        return this.createElement({
            tag: 'div',
            classList: ['common-box'],
            attributes: [{ prop: 'id', value: 'e' + day }],
            children,
            childrenAction: 'append',
        });
    }


    createListItem(i, day, children) {
        return this.createElement({
            tag: 'div',
            classList: (i === 0) ? ['day-weather', 'display'] : ['day-weather'],
            attributes: [{ prop: 'id', value: 'e' + day }],
            children,
            childrenAction: 'append',
        });
    }

    createForecastListItem(i, day, children) {
        return this.createElement({
            tag: 'div',
            classList: (i === 0) ? ['daily-forecast'] : ['daily-forecast', 'hidden'],
            attributes: [{ prop: 'id', value: 'e' + day }],
            children,
            childrenAction: 'append',
        });
    }

    createForecastElement(i, day, children) {
        return this.createElement({
            tag: 'div',
            classList: ['daily-forecast-element'],
            attributes: [{ prop: 'id', value: 'e' + day }],
            children,
            childrenAction: 'append',
        });
    }


    createElement({
        tag,
        classList,
        attributes,
        textContent,
        handlers,
        children,
        childrenAction,
    }) {
        const element = document.createElement(tag);

        if (classList.length) {
            element.classList.add(...classList);
        }

        if (attributes.length) {
            attributes.forEach(({ prop, value }) => {
                element.setAttribute(prop, value);
            });
        }

        if (textContent) {
            element.textContent = textContent;
        }

        if (handlers) {
            handlers.forEach(({ event, handler }) => {
                element.addEventListener(event, handler);
            });
        }

        if (children) {
            element[childrenAction](...children);
        }

        return element;
    }
}