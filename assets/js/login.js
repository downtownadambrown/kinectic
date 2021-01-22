import { loadCorrectPage } from "./index.js";

setTimeout(() => {
    $(document).ready(function () {
        $("#loginForm").validate({
            onclick: false,
            errorClass: "uk-text-danger",
            validClass: "uk-text-success",
            messages: {
                userNameLogin: {
                    required: "Please enter your username."
                },
                passwordLogin: {
                    required: "Please enter your password."
                }
            },
            submitHandler: function (form, event) {
                event.preventDefault();
                const loginResponse = dispatchUserDetailsForAuthentication(form.userNameLogin.value, form.passwordLogin.value);
                storeUserDetailsLocally(loginResponse);
            }
        });
    });
}, 100);

async function storeUserDetailsLocally(response) {
    response.then((element) => {
        if (element.status === 400 && element.statusText === "Bad Request") {
            console.log("Invalid Username or/and Password.", element);
        } else {
            console.log("Successfully received user details.", element)
            localStorage.setItem("firstname", element.user.firstname);
            localStorage.setItem("lastname", element.user.lastname);
            localStorage.setItem("username", element.user.username);
            localStorage.setItem("token", element.jwt)
            localStorage.setItem("isAuthenticated", true);
            location.reload();
        }
    })
}

async function dispatchUserDetailsForAuthentication(userName, password) {
    const promiseResponse = await checkLoginDetailsExist(userName, password);
    return promiseResponse;
}

async function checkLoginDetailsExist(username, password) {
    console.log(`Username: ${username} and Password: ${password}`)
    const response = axios
        .post('http://localhost:1337/auth/local', {
            identifier: username,
            password: password,
        })
        .then(response => {
            // Handle success.
            console.log('Authenticating!');
            console.log('Authenticated Data', response.data);
            console.log('Authenticated User profile', response.data.user);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred, whilst trying to login user.', error.response);
            return error.response;
        });
    return response
}

// async function requestDataFromAPI() {
//     axios
//         .get("http://localhost:1337/game-users")
//         .then((response) => {
//             //const found = response.data.find(element => element.userId === searchInput);
//             response.data.forEach((s) => {
//                 //console.log(response.data.find(element => element.userId === searchInput));
//                 //console.log(s);
//             })

//         })
//         .catch((error) => console.error(error));
// }

// //requestDataFromAPI();

// async function postDataToAPI(word) {
//     axios.post('http://localhost:1337/word-categories', {
//         word: word,
//         word_categories: [{category:"countries"}]

//     })
//         .then((response) => {
//             console.log(response);
//         }, (error) => {
//             console.log(error);
//         });
// }

// const countries = [
//     "ANDORRA",
//     "ARMENIA",
//     "AZERBAĲAN",
//     "BELGIUM",
//     "BOSNIAANDHERZEG",
//     "OVINA",
//     "BULGARIA",
//     "CROATIA",
//     "FINLAND",
//     "FRANCE",
//     "ICELAND",
//     "IRELAND",
//     "ITALY",
//     "KAZAKHSTAN",
//     "KOSOVO",
//     "LIECHTENSTEIN",
//     "LITHUANIA",
//     "MACEDONIA",
//     "MOLDOVA",
//     "MONACO",
//     "MONTENEGRO",
//     "NETHERLANDS",
//     "PORTUGAL",
//     "SANMARINO",
//     "SERBIA",
//     "SLOVAKIA",
//     "SLOVENIA",
//     "SPAIN",
//     "SWITZERLAND",
//     "TURKEY",
//     "UNITEDKINGDOM",];

// populateData = (countries) => {
//     countries.forEach(element => {
//         postDataToAPI(element)
//     });
// }

// populateData(countries)

// //postDataToAPI();


 // async function registerUserDetails(firstName,lastName,userName,email,password) {
    //     axios
    //         .post('http://localhost:1337/auth/local/register', {
    //             firstname: firstName,
    //             lastname: lastName,
    //             username: userName,
    //             email: email,
    //             password: password
    //         })
    //         .then(response => {
    //             // Handle success.
    //             console.log('Well done!');
    //             console.log('User profile', response.data.user);
    //             console.log('User token', response.data.jwt);
    //         })
    //         .catch(error => {
    //             // Handle error.
    //             console.log('An error occurred:', error.response);
    //         });
    // }

 //  const userInputValidated = {
        //         firstname: "Thiago",
        //         lastname: "Santos",
        //         username: "noxx123",
        //         email: "t@t.com",
        //         password: "noxx1234"
        //     }
        //     console.log(userInputValidated)
        //registerUserDetails("thiago","santos","noxx123","test@test.com","noxx1234");