setTimeout(() => {
    document.querySelectorAll('.category').forEach(item => {
        item.addEventListener('click', event => {
            const category = splitAndJoinCategory(event.target.getAttribute("name"));
            const difficultySelected = event.target.parentElement.querySelector(".difficulty > .uk-active");
            const wordsAndSettings = puzzleWordsAndSettings(category, difficultySelected.innerText);
            playPuzzleGame(wordsAndSettings)


        });
    });
}, 300);

const playPuzzleGame = (wordsAndSettings) => {
    console.log(wordsAndSettings)
}

const splitAndJoinCategory = (category) => {
    const splitCategory = category.split("-");
    const joinCategory = splitCategory.join("_");
    return joinCategory;
}

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
            //console.log('Username Check!');
            //console.log('Username Checked Response', response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error.
            console.log('An error occurred, whilst checking username.', error.response);
            return error.response;
        });
    return res;
}