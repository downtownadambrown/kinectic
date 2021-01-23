async function postDataToAPI(word) {
    axios.put('http://localhost:1337/word-categories', {
        params: {
            category: "countries"
        },
        data: {
            words: word
        }

    })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}

const countries = [
    "ANDORRA",
    "ARMENIA",
    "AZERBAĲAN",
    "BELGIUM",
    "BOSNIAANDHERZEG",
    "OVINA",
    "BULGARIA",
    "CROATIA",
    "FINLAND",
    "FRANCE",
    "ICELAND",
    "IRELAND",
    "ITALY",
    "KAZAKHSTAN",
    "KOSOVO",
    "LIECHTENSTEIN",
    "LITHUANIA",
    "MACEDONIA",
    "MOLDOVA",
    "MONACO",
    "MONTENEGRO",
    "NETHERLANDS",
    "PORTUGAL",
    "SANMARINO",
    "SERBIA",
    "SLOVAKIA",
    "SLOVENIA",
    "SPAIN",
    "SWITZERLAND",
    "TURKEY",
    "UNITEDKINGDOM",];

const populateData = (countries) => {
    countries.forEach(element => {
        postDataToAPI(element)
    });
}

populateData(countries)