'use strict';

const form = document.querySelector('.form');

window.onload = function() {
    form.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
}

form.querySelector('.submit').addEventListener('click', function() {
    form.querySelectorAll('input').forEach(input => {
        if (input.parentElement.className.includes('with-error')) {
            input.parentElement.className = input.parentElement.className.replace('with-error', '');
        }

        if (!isInputValid(input)) {
            input.parentElement.className += ' with-error';
        }

        input.addEventListener('click', function() {
            if (this.parentElement.className.includes('with-error')) {
                this.parentElement.className = this.parentElement.className.replace('with-error', '');
            }
        });
    });

    if (form.querySelectorAll('.with-error').length === 0) {
        alert('Valid form!');
    }
});

const dropdown = form.querySelector('.dropdown');

dropdown.addEventListener('click', function() {
    const options = this.querySelector('.options');

    if (!options.className.includes('active')) {
        options.className += ' active';
    } else {
        options.className = options.className.replace('active', '');
    }
});

dropdown.querySelectorAll('.options .item')
    .forEach(item => {
        item.addEventListener('click', function() {
            const selectedItem = this.parentElement.querySelector('.selected');
            selectedItem.className = selectedItem.className.replace('selected', '');

            this.className += ' selected';

            dropdown.querySelector('.name').innerHTML = this.querySelector('.name').innerHTML;
        });
    });

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
