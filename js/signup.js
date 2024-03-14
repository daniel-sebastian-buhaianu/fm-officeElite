'use strict';

const form = document.querySelector('.form');
const dropdown = form.querySelector('.dropdown');

window.onload = function() {
    form.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
}

form.querySelector('.submit').addEventListener('click', function() {
    form.querySelectorAll('input').forEach(input => {
        removeClass('with-error', input.parentElement);

        if (!isInputValid(input)) {
            addClass('with-error', input.parentElement);
        }

        input.addEventListener('click', function() {
            removeClass('with-error', this.parentElement);
        });
    });

    if (form.querySelectorAll('.with-error').length === 0) {
        alert('Valid form!');
    }
});

dropdown.addEventListener('click', function() {
    toggleClass('active', this.querySelector('.options'));
});

dropdown.querySelectorAll('.options .item')
    .forEach(item => {
        item.addEventListener('click', function() {
            removeClass('selected', this.parentElement.querySelector('.selected'));

            addClass('selected', this);

            dropdown.querySelector('.name').innerHTML = this.querySelector('.name').innerHTML;
        });
    });

function toggleClass(_class, element) {
    if (hasClass(_class, element)) {
        removeClass(_class, element);
    } else {
        addClass(_class, element);
    }
}

function hasClass(_class, element) {
    return element.className.includes(_class);
}

function removeClass(_class, element) {
    if (hasClass(_class, element)) {
        element.className = element.className.replace(_class, '');
    }
}

function addClass(_class, element) {
    element.className = element.className + ' ' + _class;
}

function isInputValid(input) {
    if (!input.value) {
        return false;
    }

    if (input.type == 'text') {
        if (input.value.trim().length < 1) {
            return false;
        }

        if (input.id == 'phone' && !isPhoneNumberValid(input.value)) {
            return false;
        }
    }

    if (input.id == 'email' && !isEmailValid(input.value)) {
        return false;
    }

    return true;
}

function isPhoneNumberValid(phoneNumber) {
    const re = /^\d{10}$/; // Matches a 10-digit number
    return re.test(phoneNumber);
}

function isEmailValid(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
