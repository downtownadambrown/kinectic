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
    /**
     * Validation for First name
     */
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
     * Validation for Last Name
     */
    if (lastNameInput.validity.valueMissing) {
        lastNameInputError.textContent = 'Please add your last name.';
    }
    else if (lastNameInput.validity.tooShort) {
        lastNameInputError.textContent = `You must enter a last name with minimum of ${lastNameInput.minLength} characters.`;
    }
    else if (lastNameInput.validity.tooLong) {
        lastNameInputError.textContent = `You must enter a last name with a maximum of ${lastNameInputInput.maxLength} characters.`;
    }
    /**
     * Validation for Username
     */
    if (userNameInput.validity.valueMissing) {
        userNameInputError.textContent = 'Please add a username.';
    }
    else if (userNameInput.validity.tooShort) {
        userNameInputError.textContent = `You must enter a username with minimum of ${userNameInput.minLength} characters.`;
    }
    else if (userNameInput.validity.tooLong) {
        userNameInputError.textContent = `You must enter a username with a maximum of ${userNameInput.maxLength} characters.`;
    }
    /**
     * Validation for Email
     */
    if(emailInput.validity.valueMissing) {
		emailInputError.textContent = 'Please enter an email ';
	}
	else if(emailInput.validity.typeMismatch || emailInput.validity.patternMismatch) {
		emailInputError.textContent = 'Please enter an Email with format example@example.com';
    }
    
    /**
     * Validation for Password
     */
    if (passwordInput.validity.valueMissing) {
        passwordInputError.textContent = 'Please add a password.';
    }
    else if (passwordInput.validity.tooShort) {
        passwordInputError.textContent = `You must enter a password with minimum of ${passwordInput.minLength} characters.`;
    }
    else if (passwordInput.validity.tooLong) {
        passwordInputError.textContent = `You must enter a username with a maximum of ${passwordInput.maxLength} characters.`;
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