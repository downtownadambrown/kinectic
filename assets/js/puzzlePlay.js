import * as puzzleUI from "./puzzleUI.js";

/**
 * The object passwed to this funtion contains word list
 * and user settings as well as game settings,generate a
 * puzzle once called upon. Remove logo and welcome user. 
 * 
 * @param {object} wordsAndSettings 
 */
const playPuzzleGame = (wordsAndSettings) => {
    const gameCanvas = document.querySelector("#container");
    const logo = document.querySelector(".uk-logo");
    const welcomeUser = document.querySelector("#welcomeUserContainer");
    wordsAndSettings.then((obj) => {
        logo.parentNode.removeChild(logo);
        welcomeUser.parentNode.removeChild(welcomeUser);
        puzzleUI.generateUIForPuzzle(gameCanvas, obj.words, obj.settings);
    });
};

/**
 * Split a category that is longer than one word
 * abd join them together with underscore _.
 * 
 * @param {string} category 
 */
const splitAndJoinCategory = (category) => {
    const splitCategory = category.split("-");
    const joinCategory = splitCategory.join("_");
    return joinCategory;
}

/**
 * Take the difficulty chosen by user and create and object
 * together with word list for puzzle generation. Fabricate
 * a word list array from the array request from backend.
 * Make sure words dont repeat inside new word list and that 
 * this word list array is created with random words from a specific category
 * return word list once ready.
 * 
 * @param {string} category 
 * @param {string} difficulty 
 */
const puzzleWordsAndSettings = async (category, difficulty) => {
    const EASY = 10, MEDIUM = 15, HARD = 20, response = processCategoryRequest(category);
    const wordListArray = await response.then((element) => {
        if (difficulty === "EASY") {
            const wordListEasy = [...checkDuplicatedWords(element, EASY)];
            return {
                words: wordListEasy,
                settings: {
                    orientation: ["horizontal", "vertical"],
                    level: "easy",
                    category: category
                }
            };
        } else if (difficulty === "MEDIUM") {
            const wordListMedium = [...checkDuplicatedWords(element, MEDIUM)];
            return {
                words: wordListMedium,
                settings: {
                    orientation: [
                        "horizontal",
                        "horizontalBack",
                        "vertical",
                        "verticalUp",],
                    level: "medium",
                    category: category
                },

            };
        } else if (difficulty === "HARD") {
            const wordListHard = [...checkDuplicatedWords(element, HARD)];
            return {
                words: wordListHard,
                settings: {
                    orientation: [
                        "horizontal",
                        "horizontalBack",
                        "vertical",
                        "verticalUp",
                        "diagonal",
                        "diagonalUp",
                        "diagonalBack",
                        "diagonalUpBack",],
                    level: "hard",
                    category: category
                },
            };
        }
    })
    return wordListArray;
}

/**
 * This is to check words duplicates inside array
 * whilst randomly insert words.
 * 
 * 
 * @param {array} words 
 * @param {string} level 
 */
const checkDuplicatedWords = (words, level) => {
    const wordList = [];
    for (let index = 0; index < words.length; index++) {
        let randomWord = words[Math.floor(Math.random() * words.length)]
        let checkedDuplicatedWord = wordList.filter(word => word === randomWord.word)
        if (!(checkedDuplicatedWord.length > 0)) {
            if (wordList.length === level) {
                break;
            } else if (wordList.length !== level) {
                wordList.push(randomWord.word);
            }
        }
    }
    return wordList;
}

/**
 * This will preocess the request by calling a function that
 * makes a HTTP GET request for a categories word.
 * 
 * @param {string} category 
 */
async function processCategoryRequest(category) {
    const promiseResponse = await getCategoryWords(category);
    return promiseResponse;
}

async function getCategoryWords(category) {
    const res = axios
        .get('https://api.kinectic.io/puzzles', {
            params: {
                category: category
            }
        })
        .then(response => {
            // Handle success.
           
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred, whilst checking username.', error.response);
            return error.response;
        });
    return res;
}

/**
 * This makes a HTTP request for leaderboards of all users.
 */
async function getUsersLeaderboards() {
    const res = await axios
        .get('https://api.kinectic.io/users', {})
        .then(response => {
            // Handle success.
           
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred, whilst checking username.', error.response);
            return error.response;
        });
    return res;
}

export { puzzleWordsAndSettings, playPuzzleGame, splitAndJoinCategory, getUsersLeaderboards };