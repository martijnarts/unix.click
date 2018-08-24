'use strict';

window.addEventListener('load', () => {
    const unix = document.querySelector('.js-unix');
    const iso8601 = document.querySelector('.js-flatpicker');
    const millisecondsCheckbox = document.querySelector('.js-isMilliseconds');

    let useMilliseconds = millisecondsCheckbox.checked;
    if (useMilliseconds) {
        unix.classList.add('timestamp--milliseconds');
    }

    const datepicker = flatpickr(iso8601, {
        allowInput: true,
        dateFormat: 'Z',
        defaultDate: Date.now(),
        enableTime: true,
        inline: true,
        onChange: setUnix,
        onReady: setUnix,
    });

    function setISO(timestamp) {
        if (useMilliseconds) {
            datepicker.setDate(new Date(timestamp));
        } else {
            datepicker.setDate(new Date(timestamp) * 1000);
        }
    }

    function setUnix(selectedDates) {
        if (useMilliseconds) {
            unix.value = +(selectedDates[0]);
        } else {
            unix.value = +(selectedDates[0]) / 1000;
        }
    }

    function changeMilliseconds() {
        useMilliseconds = millisecondsCheckbox.checked;

        if (useMilliseconds) {
            unix.value = unix.value * 1000;
            unix.classList.add('timestamp--milliseconds');
        } else {
            unix.value = unix.value / 1000;
            unix.classList.remove('timestamp--milliseconds');
        }
        setISO(+unix.value);
    }

    unix.addEventListener('input', (event) => {
        setISO(+unix.value);
    });
    millisecondsCheckbox.addEventListener('change', (event) => {
        changeMilliseconds();
    });
});
