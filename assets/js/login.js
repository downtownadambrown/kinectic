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