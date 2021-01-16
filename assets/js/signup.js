const userNameInput = document.querySelector("#userName");
const firstNameInput = document.getElementById("firstName");
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

async function checkUserNameExist(userNameCheck) {
    axios.get('http://localhost:1337/game-users', {
        params: {
            username: userNameCheck
        }
    })
        .then((response) => {
            if (response.data.length === 0) {
                console.log("false", response)
                return false;
            } else {
                console.log("true", response)
                return true;
            }
        }, (error) => {
            console.log(error);
        });
}

window.addEventListener("load", function () {
    async function postDataToAPI(userInputValidated) {
        axios.post('http://localhost:1337/game-users', userInputValidated)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    signUpForm.addEventListener("submit", function (event) {
        var isTrue = new Boolean(true);
        if (!firstNameInput.validity.valid) { showErrorMessage(); }
        else if (!lastNameInput.validity.valid) { showErrorMessage(); }
        else if (!emailInput.validity.valid) { showErrorMessage(); }
        else if (!passwordInput.validity.valid) { showErrorMessage(); }
        else if (!userNameInput.validity.valid) { showErrorMessage(); }
        isTrue = checkUserNameExist(userNameInput.value)
        console.log(isTrue)
        if (isTrue) {
             event.preventDefault();
            showErrorMessage(isTrue)
        } else if (isTrue){
           const userInputValidated = {
                firstname: firstNameInput.value,
                lastname: lastNameInput.value,
                username: userNameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            }
            event.preventDefault();
            postDataToAPI(userInputValidated);
            //redirect to game screen
        }

    });
});

const showErrorMessage = (isTrue) => {
    /**
     * Validation for First name
     */
    if (firstNameInput.validity.valueMissing) {
        firstNameInputError.textContent = 'Please add your first name.';
    }
    else if (firstNameInput.validity.tooShort) {
        firstNameInputError.textContent = `There must be a minimum of ${firstNameInput.minLength} characters.`;
    }
    else if (firstNameInput.validity.tooLong) {
        firstNameInputError.textContent = `There must be a maximum of ${firstNameInput.maxLength} characters.`;
    }
    /**
     * Validation for Last Name
     */
    if (lastNameInput.validity.valueMissing) {
        lastNameInputError.textContent = 'Please add your last name.';
    }
    else if (lastNameInput.validity.tooShort) {
        lastNameInputError.textContent = `There must be a minimum of ${lastNameInput.minLength} characters.`;
    }
    else if (lastNameInput.validity.tooLong) {
        lastNameInputError.textContent = `There must be a maximum of ${lastNameInputInput.maxLength} characters.`;
    }
    /**
     * Validation for Username
     */
    if (userNameInput.validity.valueMissing) {
        userNameInputError.textContent = 'Please add a username.';
    }
    else if (userNameInput.validity.tooShort) {
        userNameInputError.textContent = `There must be a minimum of ${userNameInput.minLength} characters.`;
    }
    else if (userNameInput.validity.tooLong) {
        userNameInputError.textContent = `There must be a maximum of ${userNameInput.maxLength} characters.`;
    } else if (isTrue === true) {
        console.log(isTrue)
        userNameInputError.textContent = `This username "${userNameInput.value}" already exist.`;
    }
    /**
     * Validation for Email
     */
    if (emailInput.validity.valueMissing) {
        emailInputError.textContent = 'Please enter an email.';
    }
    else if (emailInput.validity.typeMismatch || emailInput.validity.patternMismatch) {
        emailInputError.textContent = 'Please enter an Email with format example@example.com';
    }

    /**
     * Validation for Password
     */
    if (passwordInput.validity.valueMissing) {
        passwordInputError.textContent = 'Please add a password.';
    }
    else if (passwordInput.validity.tooShort) {
        passwordInputError.textContent = `There must be a minimum of ${passwordInput.minLength} characters.`;
    }
    else if (passwordInput.validity.tooLong) {
        passwordInputError.textContent = `There must be a maximum of ${passwordInput.maxLength} characters.`;
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