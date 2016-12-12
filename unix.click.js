'use strict';

function pad(value) {
    return ('0' + value).substr(-2);
}

window.addEventListener('load', () => {
    const unix = document.querySelector('.js-unix');
    const i8601 = {
        year: document.querySelector('.js-i8601-year'),
        month: document.querySelector('.js-i8601-month'),
        day: document.querySelector('.js-i8601-day'),
        hour: document.querySelector('.js-i8601-hour'),
        minute: document.querySelector('.js-i8601-minute'),
        second: document.querySelector('.js-i8601-second'),
        tzHour: document.querySelector('.js-i8601-tz-hour'),
        tzMinute: document.querySelector('.js-i8601-tz-minute'),
    };

    function changeUnix() {
        const date = new Date(parseInt(unix.value, 10) * 1000);
        setI8601(date);
    }

    function setUnix(date) {
        unix.value = parseInt(date.getTime() / 1000, 10);
    }

    function changeI8601() {
        let date = new Date(
            i8601.year.value,
            i8601.month.value - 1,
            i8601.day.value,
            i8601.hour.value,
            i8601.minute.value,
            i8601.second.value
        );
        setI8601(date);

        date = new Date(
            i8601.year.value,
            i8601.month.value - 1,
            i8601.day.value,
            i8601.hour.value,
            i8601.minute.value,
            i8601.second.value
        );
        setUnix(date);
    }

    function setI8601(date) {
        i8601.year.value = date.getFullYear();
        i8601.month.value = pad(date.getMonth() + 1);
        i8601.day.value = pad(date.getDate());
        i8601.hour.value = pad(date.getHours());
        i8601.minute.value = pad(date.getMinutes());
        i8601.second.value = pad(date.getSeconds());
        i8601.tzHour.value = pad(0);
        i8601.tzMinute.value = pad(0);
    }

    setUnix(new Date());
    changeUnix();

    unix.addEventListener('change', changeUnix);
    unix.addEventListener('keyup', changeUnix);
    Object.keys(i8601).forEach(key => {
        i8601[key].addEventListener('change', changeI8601);
        i8601[key].addEventListener('keyup', changeI8601);
    });
});
