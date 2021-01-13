const userNameInput = document.querySelector("#userName");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signUpButton = document.querySelector("#signUp");
const signUpForm = document.querySelector("#signUpForm");


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


firstNameInput.addEventListener('input', function () {
    if (firstNameInput.validity.valid) {
        
    }
    else { showError(); }
});

lastNameInput.addEventListener('input', function () {
    if (lastNameInput.validity.valid) {
       
    }
    else { showError(); }
});

userNameInput.addEventListener('input', function () {
    if (userNameInput.validity.valid) {
       
    }
    else { showError(); }
});

emailInput.addEventListener('input', function () {
    if (emailInput.validity.valid) {
       
    }
    else { showError(); }
});

passwordInput.addEventListener('input', function () {
    if (passwordInput.validity.valid) {
       
    }
    else { showError(); }
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
    });
});

const showErrorMesage = () => {

}