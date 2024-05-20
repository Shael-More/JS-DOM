const usernameEl = document.querySelector('#username')
const emailEl = document.querySelector('#email')
const passwordEl = document.querySelector('#password')
const confirmPasswordEl = document.querySelector('#confirm-password')

const form = document.querySelector('#signup')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    // validate forms
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {

    }
})

const isRequired = value => value === '' ? false : true
const isBetween = (length, min, max) => length < min || length > max ? false : true

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    return re.test(password)
}

const showError = (input, message) => {
    const formField = input.parentElement

    formField.classlist.remove('success')
    formField.classlist.add('error')

    const error = formField.querySelector('small')
    error.textContent = message

}
const showSuccess = (input) => {
    const formField = input.parentElement

    formField.classlist.remove('error')
    formField.classlist.add('success')

    const error = formField.querySelector('small')
    error.textContent = ''
}

const checkUsername = () => {
    let valid = false;
    const min = 3
    const max = 25
    const username = usernameEl.value.trim()

    if(!isRequired(username)) {
        showError(usernameEl, "Username cannot be blank")
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEl, `username must be between ${min} and ${max} characters`)
    } else {
        showSuccess(usernameEl)
        valid = true

    }
    return valid 

}

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim()

    if(!isRequired(email)) {
        showError(usernameEl, "email cannot be blank")
    } else if (!isEmailValid(email)) {
        showError(usernameEl, `Email is bot valid`)
    } else {
        showSuccess(emailEl)
        valid = true

    }
    return valid 

}

const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Confirm password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};