var userNameInput = document.querySelector("#userName");
var firstNameInput = document.querySelector("#firstName");
var lastNameInput = document.querySelector("#lastName");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#signUp");

async function postDataToAPI(firstName, lastName, userName, email, password) {
    axios.post('http://localhost:1337/game-users', {
        firstname: firstName,
        lastname: lastName,
        username: userName,
        email: email,
        password: password
    
    })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}


populateData = (countries) => {
   
}

signUpButton.addEventListener("click", function(){ alert("Hello World!"); });