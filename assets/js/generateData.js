async function postDataToAPI(word, category) {
    axios.post('https://api.kinectic.io/puzzles', {
        word: word,
        category: category
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
    "BOSNIAANDHERZEGOVINA",
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

const animals = [
    "ANT",
    "BIRD",
    "CAMEL",
    "CHICKEN",
    "DEER",
    "DOG",
    "EAGLE",
    "ELEPHANT",
    "FROG",
    "GOAT",
    "HIPPOPOTAMUS",
    "HORSE",
    "KITTEN",
    "MONKEY",
    "OCTOPUS",
    "PELICAN",
    "PIGEON",
    "PORCUPINE",
    "RAT",
    "RHINOCEROS",
    "ROOSTER",
    "SHARK",
    "SNAIL",
    "SNAKE",
    "SWALLOW",
    "VULTURE",
    "WALRUS",
    "WEASEL",
    "WOLF",
    "ZEBRA"];

const placesAndBeaches = [
    "ANGUILLA",
    "ARUBA",
    "AUSTRALIA",
    "BAHAMAS",
    "BELIZE",
    "BRAZIL",
    "CALIFORNIA",
    "CAYMANISLANDS",
    "CHILE",
    "CUBA",
    "DOMINICANREPUBLIC",
    "EGYPT",
    "FIJI",
    "FLORIDA",
    "FRANCE",
    "FRENCHPOLYNESIA",
    "GREECE",
    "GRENADA",
    "HAWAII",
    "INDONESIA",
    "ITALY",
    "JAMAICA",
    "MALDIVES",
    "MEXICO",
    "PUERTORICO",
    "SPAIN",
    "THAILAND",
    "USVIRGINISLANDS",];

const tv = [
    "ARYA",
    "BENJEN",
    "BRAN",
    "BRIENNE",
    "CERSEI",
    "DAARIO",
    "DAENERYS",
    "EDDARD",
    "GREYWORM",
    "HODOR",
    "JAIME",
    "JOFFREY",
    "JONSNOW",
    "JORAH",
    "MELISANDRE",
    "MISSANDEI",
    "PETYR",
    "RAMSAY",
    "RICKON",
    "ROBB",
    "ROBERT",
    "SANDORCLEGANE",
    "SANSA",
    "SHAE",
    "THEON",
    "TORMUND",
    "TYRION",
    "VARYS",
    "WALDER",
    "YGRITTE"];

const movies = ["ALIEN",
    "ARMAGEDDON",
    "AVATAR",
    "BRAVEHEART",
    "GHOSTBUSTERS",
    "GLADIATOR",
    "GREMILINS",
    "HANNIBAL",
    "INCEPTION",
    "JAWS",
    "JUMANJI",
    "PLATOON",
    "PSYCHO",
    "ROCKY",
    "SCARFACE",
    "SEVEN",
    "TITANIC",
    "TWILIGHT",
    "TWINS",
    "WATCHMEN",
    "ACCEPTED",
    "AMERICANPIE",
    "ANCHORMAN",
    "ANIMALHOUSE",
    "BADGRANDPA",
    "BADTEACHER",
    "CADDYSHACK",
    "CLUELESS",
    "COMINGTOAMERICA",
    "DATENIGHT",
    "DUEDATE",
    "DUMBANDDUMBER",
    "GROUNDHOGDAY",
    "GROWNUPS",
    "HALLPASS",
    "JUSTGOWITHIT",
    "MEANGIRLS",
    "ROLEMODELS",
    "TAXI",
    "THEHANGOVER",
    "THEOTHERGUYS",
    "WEDDINGCRASHERS",
    "WERETHEMILLERS",
    "WHITECHICKS",
    "STARWARS",
    "STARTREK"]

const foodAndDrinks = ["BRUSCHETTA",
    "CALAMARI",
    "CALZONE",
    "CHIANTI",
    "CIABATTA",
    "CROSTOLO",
    "FOCACCIA",
    "FONDUTA",
    "FONTINA",
    "FRISELLA",
    "FUSILLI",
    "GNOCCHI",
    "MARINARA",
    "MINESTRONE",
    "MOZZARELLA",
    "ORECCHIETTE",
    "OSSOBUCCO",
    "PANCETTA",
    "PIZZA",
    "POLENTA",
    "PROSCIUTTO",
    "RAVIOLI",
    "RISOTTO",
    "SALAMI",
    "APPLE",
    "APRICOT",
    "BANANA",
    "BLACKBERRY",
    "BLUEBERRY",
    "CHERRY",
    "CRANBERRY",
    "CURRANT",
    "FIG",
    "GRAPE",
    "GRAPEFRUIT",
    "GRAPES",
    "KIWI",
    "KUMQUAT",
    "LEMON",
    "LIME",
    "MELON",
    "NECTARINE",
    "ORANGE",
    "PEACH",
    "PEAR",
    "PERSIMMON",
    "PINEAPPLE",
    "PLUM",
    "POMEGRANATE",
    "PRUNE",
    "RASPBERRY",
    "STRAWBERRY",
    "TANGERINE",
    "WATERMELON",
    "AMERICAN",
    "ASIAGO",
    "BLEU",
    "BOURSIN",
    "BRIE",
    "CAMEBERT",
    "CHEDDAR",
    "COTIJA",
    "COTTAGE",
    "CREAMCHEESE",
    "EMMENTAL",
    "FETA",
    "GORGONZOLA",
    "GOUDA",
    "GRANAPADANO",
    "GRUYÈRE",
    "HAVARTI",
    "JARLSBERG",
    "MANCHEGO",
    "MASCARPONE",
    "MONTEREYJACK",
    "MOZZARELLA",
    "PARMESAN",
    "PECORINO",
    "PROVOLONE",
    "RICOTTA",
    "ROMANO",
    "ROQUEFORT",
    "SWISS",
    "COCACOLA",
    "REDWINE",
    "WHITEWINE",
    "JUICE",
    "GIN",
    "VODKA",
    "ABSOLUT",
    "CIDER",
    "BEER",
    "HOTCHOCOLATE",
    "COFFEE",
    "TEA",
    "COCONUTMILK",
    "WATER"];


const populateData = (countries, animals, placesAndBeaches, tv, movies, foodAndDrinks) => {
    countries.forEach(element => {
        postDataToAPI(element, "countries")
    });
    animals.forEach(element => {
        postDataToAPI(element, "animals")
    });
    placesAndBeaches.forEach(element => {
        postDataToAPI(element, "places_and_beaches")
    });
    tv.forEach(element => {
        postDataToAPI(element, "tv")
    });
    movies.forEach(element => {
        postDataToAPI(element, "movies")
    });
    foodAndDrinks.forEach(element => {
        postDataToAPI(element, "food_and_drinks")
    });
}

//populateData(countries, animals, placesAndBeaches, tv, movies, foodAndDrinks)

async function getDataFromAPI(category) {
    axios.get('https://api.kinectic.io/puzzles', {
        params: {
            category: category
        }
        
    })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}
