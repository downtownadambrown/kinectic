var el = document.querySelector(".myclass");
var el = document.querySelector(".myclass");
var el = document.querySelector(".myclass");
var el = document.querySelector(".myclass");
var el = document.querySelector(".myclass");

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

