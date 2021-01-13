const userNameInput = document.querySelector("#userName");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const userNameInputError = document.querySelector("#userName + span.uk-text-danger");
const firstNameInputError = document.querySelector("#firstName + span.uk-text-danger");
const lastNameInputError = document.querySelector("#lastName + span.uk-text-danger");
const emailInputError = document.querySelector("#email + span.uk-text-danger");
const passwordInputError = document.querySelector("#password + span.uk-text-danger");

const signUpButton = document.querySelector("#signUp");
const signUpForm = document.querySelector("#signUpForm");


firstNameInput.addEventListener('input', function () {
    if (firstNameInput.validity.valid) {
        firstNameInputError.innerHTML = '';
        firstNameInputError.className = 'uk-text-danger';

    }
    else { showErrorMessage() };
});

lastNameInput.addEventListener('input', function () {
    if (lastNameInput.validity.valid) {
        lastNameInputError.innerHTML = '';
        lastNameInputError.className = 'uk-text-danger';

    }
    else { showErrorMessage() };
});

userNameInput.addEventListener('input', function () {
    if (userNameInput.validity.valid) {
        userNameInputError.innerHTML = '';
        userNameInputError.className = 'uk-text-danger';

    }
    else { showErrorMessage() };
});

emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
        emailInputError.innerHTML = '';
        emailInputError.className = 'uk-text-danger';
    }
    else { showErrorMessage() };
});


passwordInput.addEventListener('input', function () {
    if (passwordInput.validity.valid) {
        passwordInputError.innerHTML = '';
        passwordInputError.className = 'uk-text-danger';
    }
    else { showErrorMessage() };
});

window.addEventListener("load", function () {
    async function postDataToAPI(firstName, lastName, userName, lastNameInput, password) {
        axios.post('http://localhost:1337/game-users', {
            firstname: firstName,
            lastname: lastName,
            username: userName,
            lastNameInput: lastNameInput,
            password: password

        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    signUpForm.addEventListener("submit", function (event) {
        alert("submit")

        event.preventDefault();
        //postDataToAPI();
        //redirect to game screen
    });
});

const showErrorMessage = () => {
    if (firstNameInput.validity.valueMissing) {
        firstNameInputError.textContent = 'Please add your first name.';
    }
    else if (firstNameInput.validity.tooShort) {
        firstNameInputError.textContent = `You must enter a first name with minimum of ${firstNameInput.minLength} characters.`;
    }
    else if (firstNameInput.validity.tooLong) {
        firstNameInputError.textContent = `You must enter a first name with a maximum of ${firstNameInput.maxLength} characters.`;
    }

    /**
     * These will add UIKIT classes for validation status
     */
    firstNameInputError.className = 'uk-text-danger uk-text-small';
    lastNameInputError.className = 'uk-text-danger uk-text-small';
    userNameInputError.className = 'uk-text-danger uk-text-small';
    emailInputError.className = 'uk-text-danger uk-text-small';
    passwordInputError.className = 'uk-text-danger uk-text-small';

}