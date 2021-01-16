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


const userNameLogin = document.querySelector("#userNameLogin");
const passwordLogin = document.querySelector("#passwordLogin");
const loginForm = document.querySelector("#loginForm");


window.addEventListener("load", function () {
    async function authenticateLoginDetails(username, password) {
        console.log(`Username: ${username} and Password: ${password}`)
        axios
            .post('http://localhost:1337/auth/local', {
                identifier: username,
                password: password,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    }
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
    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();
        authenticateLoginDetails("noxx123", "noxx1234")
         const userInputValidated = {
                firstname: "Thiago",
                lastname: "Santos",
                username: "noxx123",
                email: "t@t.com",
                password: "noxx1234"
            }
            console.log(userInputValidated)
        //registerUserDetails("thiago","santos","noxx123","test@test.com","noxx1234");
    });
});
