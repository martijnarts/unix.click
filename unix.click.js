'use strict';

window.addEventListener('load', () => {
    const unix = document.querySelector('.js-unix');
    const iso8601 = document.querySelector('.js-flatpicker');

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
        datepicker.setDate(new Date(timestamp * 1000));
    }

    function setUnix(selectedDates) {
        unix.value = +(selectedDates[0]) / 1000;
    }

    unix.addEventListener('input', (event) => {
        setISO(+unix.value);
    });
});
