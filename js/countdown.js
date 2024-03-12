'use strict';

const deadline = '4 Nov 2024';

(function(date) {
    const targetDate = new Date(date);
    const countdownInterval = setInterval(updateCountdown, 1000);

    document.querySelector('.countdown .date').innerHTML = targetDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    function updateCountdown() {
        const now = new Date();
        const miliseconds = targetDate - now;

        let days, hours, minutes, seconds;

        if (miliseconds <= 0) {
            clearInterval(countdownInterval);

            days = hours = minutes = seconds = 0;
        } else {
            days = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
            hours = Math.floor((miliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);
        }

        document.querySelector('.countdown .days .number').innerHTML = days;
        document.querySelector('.countdown .hours .number').innerHTML = hours;
        document.querySelector('.countdown .minutes .number').innerHTML = minutes;
        document.querySelector('.countdown .seconds .number').innerHTML = seconds;
    }
})(deadline);
